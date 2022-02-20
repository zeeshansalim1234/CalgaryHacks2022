import "../styles/HealthSearchStyles.css";
import "../styles/GlassStyles.css";
import { Form, Card, Button } from "react-bootstrap";
import { useState } from "react";
import Axios from "axios";

function HealthSearchPage() {
  const [results, setResults] = useState(null);
  const [file, setFile] = useState(null);

  function submitfile() {
    if(file !== null){
      let formData = new FormData();
      formData.append("file", file);
      Axios.post("http://127.0.0.1:5000/api/healthProduct", {
        path: file.name,
      })
      .then((res) => {
        setResults(res.data);
        setFile(null);
      })
      .catch((e) => {
        console.log(e);
      })
    }
  }

  if (results === null) {
    return (
      <div className="glass">
        <div className="IngredientsHeader">
          <h1>Upload a PDF, Image, or other document to Search</h1>
          <Form.Control
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            size="lg"
            style={{ width: `40%` }}
          />
          <Button onClick={submitfile} size="lg" style={{marginTop:`2%`}}>
            Submit
          </Button>

        </div>
      </div>
    );
  } else {
    return (
      <div className="glass">
        <div className="HealthSearchContainer">
          <div style={{display:`flex`, justifyContent:`space-between`}}>
            <h1 className="HealthSearchHeader">Results</h1>
            <Button onClick={() => setResults(null)} variant="dark" style={{height:`50px`, margin:`auto 0 auto 0`}}>Submit Another Item</Button>
          </div>
          <h2 className="HealthSearchSubHeader">Youtube Videos</h2>
          <div
            style={{
              display: `flex`,
              gap: `5%`,
              flexWrap: `wrap`,
              justifyContent: `center`,
            }}
          >
            {results.youtube.map((video) => {
              return (
                <Card
                  style={{
                    width: `26.66%`,
                    margin: `10px`,
                    borderRadius: `20px`,
                    background: `linear-gradient(to top left, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.7)`,
                  }}
                >
                  <Card.Body>
                    <Card.Title>{video.title}</Card.Title>
                    <Card.Text>{video.abstract.substring(0, 100)}...</Card.Text>
                    <Button href={video.url} variant="primary">
                      Watch Here
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>

          <h2 className="HealthSearchSubHeader">Research Papers</h2>
          <div
            style={{
              display: `flex`,
              gap: `5%`,
              flexWrap: `wrap`,
              justifyContent: `center`,
            }}
          >
            {results.all_papers_details.map((paper) => {
              return (
                <Card
                  style={{
                    width: `26.66%`,
                    margin: `10px`,
                    borderRadius: `20px`,
                    background: `linear-gradient(to top left, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.7)`,
                  }}
                >
                  <Card.Body>
                    <Card.Title>{paper.title}</Card.Title>
                    <Card.Text>{paper.abstract.substring(0, 250)}...</Card.Text>
                    <Button href={paper.url} variant="primary">
                      Read Here
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HealthSearchPage;
