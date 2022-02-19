import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpPage from "./pages/SignUpPage";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="/signup" exact element={<SignUpPage />} />
          <Route path="/login" exact element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
