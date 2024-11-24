import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black border-b-4 border-cyan-800 p-4">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">STUDENT MANAGEMENT SYSTEM</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/students" className="hover:underline">
            Students
          </Link>
          <Link to="/courses" className="hover:underline">
            Courses
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
