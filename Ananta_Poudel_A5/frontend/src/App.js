// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddEmployeePage from "./pages/AddEmployeePage";

const App = () => {
  return (
    <Router>
      <nav className="bg-emerald-700 p-4 flex gap-4 items-center">
        <p className="text-lg text-white font-bold">Student Management</p>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/add-employee"
              className="text-white hover:text-orange-500"
            >
              Add Employee
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-employee" element={<AddEmployeePage />} />
          <Route path="/edit-employee/:id" element={<AddEmployeePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
