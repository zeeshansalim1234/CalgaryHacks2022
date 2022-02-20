import "../styles/DashboardStyles.css";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function DashboardPage() {
  const [user, setUser] = useState({
    name: "Nick",
  });
  const [timeOfDay, setTimeOfDay] = useState();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      window.location.href = "/login";
    }

    let time = new Date().getHours();
    switch (true) {
      case time < 12:
        setTimeOfDay("Good Morning ");
        break;
      case time < 18:
        setTimeOfDay("Good Afternoon ");
        break;
      default:
        setTimeOfDay("Good Evening ");
        break;
    }
  });

  return (
    <div className="glass">
      <div className="DashboardPageContainer">
        <div className="DashboardPageLeft">
          <div className="DashboardHeaderContainer">
            <h1 className="DashboardHeader">
              {timeOfDay}
              {user.name}
            </h1>
          </div>
          <div className="CardContainer">
            <Card className="DashboardCard">
              <Card.Img variant="top" src="./assets/ingredients.jpg" style={{borderRadius:`20px 20px 0 0`}} />
              <Card.Body>
                <Card.Title>Explore ingredients in your products</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Learn what ingredients may be harmful
                </Card.Subtitle>
              </Card.Body>
            </Card>
            <Card className="DashboardCard">
              <Card.Body>
                <Card.Title>
                  Discover broader information on various health subjects.
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Discover broader information on various health subjects.
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
