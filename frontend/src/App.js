import * as React from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpPage from "./pages/SignUpPage";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import IngredientSearchPage from "./pages/IngredientSearchPage";
import HealthSearchPage from "./pages/HealthSearchPage";
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="/signup" exact element={<SignUpPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/dashboard" exact element={<DashboardPage />} />
          <Route path="/ingredientsearch" exact element={<IngredientSearchPage />} />
          <Route path="/healthsearch" exact element={<HealthSearchPage />} />
          <Route path="/" exact element={<DashboardPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
