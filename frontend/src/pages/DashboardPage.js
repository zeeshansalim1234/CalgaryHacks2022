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
          <h2 className="DashboardSubHeader">
            We are so glad to see you back! Explore some of our various features
            to learn more about your health and wellness. Taking care of your
            mind and body is important to your long term wellbeing and the tools
            we have built will ensure this.
          </h2>
          <div className="CardContainer">
            <Card className="DashboardCard">
              <Card.Img
                variant="top"
                src="./assets/ingredients.jpg"
                style={{ borderRadius: `20px 20px 0 0` }}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: `center` }}>
                  Explore ingredients in your products
                </Card.Title>
                <Card.Text className="mb-2 ">
                  Understanding what ingredients are in your food is incredibly important
                  in todays product landscape. Using machine learning, our tool can detect
                  potentialy harmful ingredients like fillers and preservatives that can be
                  damaging for your health.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="DashboardCard">
              <Card.Img
                variant="top"
                src="./assets/healthcard.jpg"
                style={{ borderRadius: `20px 20px 0 0` }}
              />

              <Card.Body>
                <Card.Title style={{ textAlign: `center` }}>
                  Discover broader information on various health subjects.
                </Card.Title>
                <Card.Text className="mb-2 ">
                  Discover broader information on various health subjects.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
