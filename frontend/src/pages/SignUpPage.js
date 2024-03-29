import "../styles/SignUpPageStyles.css";
import "../styles/GlassStyles.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
import { useState } from "react";

function SignUpPage() {
  const serverAddr = "http://127.0.0.1:5000";
  const [validated, setValidated] = useState(false);

  const signup = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      Axios
        .post(serverAddr + "/api/signup", {
          email: document.getElementById("email").value,
          name: document.getElementById("name").value,
          password: document.getElementById("password").value,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.name);
          window.location.href = "/";
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
            <Link to="/login" style={{ textDecoration: `none`, color:`rgba(0, 89, 255, 0.678);` }}>
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
              id="name"
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
                id="password"
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
