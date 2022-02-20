import "../styles/DashboardStyles.css";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

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
            <Card
              className="DashboardCard"
            >
              <Link style={{ textDecoration: `none` }} to="/ingredientsearch">
                <Card.Img
                  variant="top"
                  src="./assets/ingredients.jpg"
                  style={{ borderRadius: `20px 20px 0 0` }}
                />
              </Link>
              <Link style={{ textDecoration: `none`, color: `black` }} to="/ingredientsearch">
                <Card.Body>
                  <Card.Title style={{ textAlign: `center` }}>
                    Explore ingredients in your products
                  </Card.Title>
                  <Card.Text className="mb-2 ">
                    Understanding what ingredients are in your food is
                    incredibly important in todays product landscape. Using
                    image recognition, our tool can detect potentialy harmful
                    ingredients like fillers and preservatives that can be
                    damaging for your health.
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
            <Card className="DashboardCard">
              <Link style={{ textDecoration: `none` }} to="/healthsearch">
                <Card.Img
                  variant="top"
                  src="./assets/healthcard.jpg"
                  style={{ borderRadius: `20px 20px 0 0` }}
                />
              </Link>
              <Link style={{ textDecoration: `none`, color:`black` }} to="/healthsearch">
                <Card.Body>
                  <Card.Title style={{ textAlign: `center` }}>
                    Get broader information on health subjects.
                  </Card.Title>
                  <Card.Text className="mb-2 ">
                    Sometimes it can be hard to find resources on various health
                    subjects like workouts, meals, supplements, and other
                    medical information. Our machine learning model can provide
                    you with relevent youtube videos, research papers an more on
                    these topics!
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
