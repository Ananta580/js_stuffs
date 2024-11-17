import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import React, { useState } from "react";

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const handleLogin = (token) => {
    setAuthToken(token);
    localStorage.setItem("authToken", token);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            authToken ? (
              <Navigate to="/home" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            authToken ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
