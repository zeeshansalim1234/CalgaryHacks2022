import "../styles/LoginPageStyles.css";
import "../styles/GlassStyles.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function LoginPage() {
  function login() {

  }

  return (
    <div className="glass">
      <div className="LoginPageContainer">
        <div className="LoginPageLeftCol">
          <h2>WELCOME BACK</h2>
          <h1>Log in.</h1>
          <h2 style={{ marginBottom: `10%` }}>
            Not a member?{" "}
            <Link to="/signup" style={{ textDecoration: `none` }}>
              Sign up
            </Link>
          </h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="FormLabel">Email address</Form.Label>
              <Form.Control
                className="FormControl"
                style={{ borderRadius: `10px` }}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="FormLabel">Password</Form.Label>
              <Form.Control
                className="FormControl"
                style={{ borderRadius: `10px` }}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button
              style={{
                background: `rgb(1, 141, 255)`,
                borderColor: `rgb(1, 141, 255)`,
              }}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
        <div className="LoginPageRightCol">
          <img
            alt="Health"
            src="./assets/health2.png"
            style={{ marginRight: `150px`, height: `450px` }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
