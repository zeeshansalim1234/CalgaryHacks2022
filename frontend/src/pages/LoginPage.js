import "../styles/LoginPageStyles.css";
import "../styles/GlassStyles.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import Axios from 'axios';

function LoginPage() {
    const serverAddr = "http://localhost:3000";
    const [validated, setValidated] = useState(false);
  
    const login = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
  
      if (form.checkValidity() === false) {
        event.stopPropagation();
        setValidated(true);
      } else {
        Axios
          .post(serverAddr + "/api/login", {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
          })
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            window.location.href = "/dashboard";
          });
      }
    };

  return (
    <div className="glass">
      <div className="LoginPageContainer">
        <div className="LoginPageLeftCol">
          <h2>WELCOME BACK</h2>
          <h1>Log in.</h1>
          <h2 style={{ marginBottom: `10%` }}>
            Not a member?{" "}
            <Link to="/signup" style={{ textDecoration: `none`, color:`rgba(0, 89, 255, 0.678);` }}>
              Sign up
            </Link>
          </h2>
          <Form noValidate validated={validated} onSubmit={login}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="FormLabel">Email address</Form.Label>
              <Form.Control
                className="FormControl"
                style={{ borderRadius: `10px` }}
                type="email"
                placeholder="Enter email"
              />
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
