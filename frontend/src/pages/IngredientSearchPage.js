import "../styles/IngredientsStyles.css";
import "../styles/GlassStyles.css";
import { Badge, Form, Alert, Button } from "react-bootstrap";
import { useState } from "react";
import Axios from "axios";

function IngredientSearchPage() {
  const [product, setProduct] = useState(null);
  const [file, setFile] = useState(null);

  function submitfile(file1) {
    if (file1 !== null) {
      console.log(file);
      let formData = new FormData();
      formData.set("file", file1);
      Axios({
        method: "post",
        url: "http://127.0.0.1:5000/api/healthProduct",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        setProduct(res.data);
        switch (product.nutrition_grades) {
          case "e":
            product.realGrade = "Bad nutritional quality.";
            product.gradeColor = "danger";
            break;
          case "d":
            product.realGrade = "Poor nutritional quality.";
            product.gradeColor = "warning"
            break;
          case "c":
            product.realGrade = "Average nutritional quality.";
            product.gradeColor = "secondary";
            break;
          case "b":
            product.realGrade = "Good nutritional quality.";
            product.gradeColor = "primary";
            break;
          case "a":
            product.realGrade = "Very good nutritional quality.";
            product.gradeColor = "success";
            break;
          default:
            break;
        }
        setFile(null);
      });
    }
  }

  if (product === null) {
    return (
      <div className="glass">
        <div className="IngredientsHeader">
          <h1>Upload a Image of the Products Barcode</h1>
          <Form.Control
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            size="lg"
            style={{ width: `40%` }}
          />
          <Button
            onClick={() => submitfile(file)}
            size="lg"
            style={{ marginTop: `2%` }}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="glass">
        <div
          style={{
            margin: `3% 4% 3% 4%`,
            justifyContent: `start`,
            display: `flex`,
            flexDirection: `column`,
          }}
        >
          <div style={{ display: `flex`, justifyContent: `space-between` }}>
            <h1 className="ProductHeader">{product.product_name}</h1>{" "}
            <Button
              onClick={() => setProduct(null)}
              variant="dark"
              style={{
                fontSize: `18px`,
                height: `50px`,
                margin: `auto 0 auto 0`,
              }}
            >
              Submit Another Item
            </Button>
          </div>
          <div style={{ display: `flex`, flexWrap: `wrap`, gap: `10px` }}>
            {product.nutrient_levels_tags.map((element) => {
              let split = element.split(" ");
              switch (split[2]) {
                case "low":
                  return (
                    <Badge style={{ fontSize: "18px" }} pill bg="success">
                      {element}
                    </Badge>
                  );
                case "moderate":
                  return (
                    <Badge style={{ fontSize: "18px" }} pill bg="warning">
                      {element}
                    </Badge>
                  );
                case "high":
                  return (
                    <Badge style={{ fontSize: "18px" }} pill bg="danger">
                      {element}
                    </Badge>
                  );
                default:
                  return;
              }
            })}
          </div>

          <h2 className="IngredientsResultSubHeader">
            Allergens to be careful of!
          </h2>
          <div style={{ display: `flex`, gap: `10px` }}>
            {product.allergens.map((allergen) => {
              if (allergen !== "") {
                return (
                  <Alert className="AllergyAlert" variant="warning">
                    <p style={{ fontSize: `18px`, margin: `0` }}>{allergen}</p>
                  </Alert>
                );
              }
            })}
          </div>

          <div
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              alignItems: `center`,
              marginTop: `2%`,
            }}
          >
            <h2 className="IngredientsResultSubHeader" style={{ margin: `0` }}>
              Ingredients:
            </h2>
            {product.ingredients.map((ingredient, inx) => {
              ingredient = ingredient.replace(",", ".");
              if (inx === 0)
                return (
                  <p style={{ margin: `0`, fontSize: `18px` }}>
                    &nbsp;{ingredient}
                  </p>
                );
              return (
                <p style={{ margin: `0`, fontSize: `18px` }}>
                  ,&nbsp;{ingredient}
                </p>
              );
            })}
          </div>

          <h2 className="IngredientsResultSubHeader">Other Analysis</h2>
          <div
            style={{
              display: `flex`,
              flexDirection: `row`,
              gap: `20px`,
              marginTop: `15px`,
            }}
          >
            <div style={{ display: `flex`, flexDirection: `row` }}>
              <img
                alt="palm oil"
                className="IngredientsIcon"
                src="./assets/palmoilicon.png"
              />
              <h3 style={{ fontSize: `18px`, margin: `9% 0 0 0` }}>
                {product.ingredients_analysis_tags[0]}
              </h3>
            </div>
            <div style={{ display: `flex`, flexDirection: `row` }}>
              <img
                alt="leaf"
                className="IngredientsIcon"
                src="./assets/vegan.png"
              />
              <h3 style={{ fontSize: `18px`, margin: `9% 0 0 0` }}>
                {product.ingredients_analysis_tags[1]}
              </h3>
            </div>
            <div style={{ display: `flex`, flexDirection: `row` }}>
              <img
                alt="avocado"
                className="IngredientsIcon"
                src="./assets/vegetarian.png"
              />
              <h3 style={{ fontSize: `18px`, margin: `5% 0 0 0` }}>
                {product.ingredients_analysis_tags[2]}
              </h3>
            </div>
          </div>
          <h2 className="IngredientsResultSubHeader">Overall Score</h2>
          <h2 className="IngredientsResultSubHeader">
            <Alert variant={product.gradeColor} className="AllergyAlert">{product.realGrade}</Alert>
          </h2>
        </div>
      </div>
    );
  }
}

export default IngredientSearchPage;
