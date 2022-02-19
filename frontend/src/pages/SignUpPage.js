import "../styles/SignUpPageStyles.css";
import "../styles/GlassStyles.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function SignUpPage() {
  const serverAddr = "http://localhost:3000";
  const [validated, setValidated] = useState(false);

  function checkForm() {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return false;
    }
    if (name.length() < 3) {
      return false;
    }
    if (password.length() < 5) {
      return false;
    }
    return true;
  }

  const signup = (event) => {
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      console.log("TEST");
      axios
        .post(serverAddr + "/api/signup", {
          email: document.getElementById("email").value,
          name: document.getElementById("name").value,
          password: document.getElementById("password").value,
        })
        .then((res) => {
          window.location.href("/login");
        });
    }
  };

  return (
    <div className="glass">
      <div className="SignUpPageContainer">
        <div className="SignUpPageLeftCol">
          <h2>START FOR FREE</h2>
          <h1>Create a new account.</h1>
          <h2 style={{ marginBottom: `10%` }}>
            Already a member?{" "}
            <Link to="/login" style={{ textDecoration: `none` }}>
              Log in
            </Link>
          </h2>
          <Form noValidate validated={validated} onSubmit={signup}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="FormLabel">Email address</Form.Label>
              <Form.Control
                required
                id="email"
                className="FormControl"
                style={{ borderRadius: `10px` }}
                type="email"
                placeholder="Enter email"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Label className="FormLabel">Name</Form.Label>
            <Form.Control
              required
              className="FormControl"
              style={{ borderRadius: `10px` }}
              type="text"
              placeholder="Enter name"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid name
            </Form.Control.Feedback>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="FormLabel">Password</Form.Label>
              <Form.Control
                required
                className="FormControl"
                style={{ borderRadius: `10px` }}
                type="password"
                placeholder="Password"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
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
        <div className="SignUpPageRightCol">
          <img
            alt="Health"
            src="./assets/health.png"
            style={{ marginRight: `150px`, height: `500px`, marginTop: `20px` }}
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
