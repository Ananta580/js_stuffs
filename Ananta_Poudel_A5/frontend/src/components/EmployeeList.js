// src/components/EmployeeList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/api/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Employee List</h2>
      <ul className="space-y-2">
        {employees.map((employee) => (
          <li
            key={employee.id}
            className="flex justify-between items-center p-2 border-b last:border-none border-gray-200"
          >
            <span>
              {employee.first_name} {employee.last_name} - {employee.department}
            </span>
            <Link
              to={`/edit-employee/${employee.id}`}
              className="text-orange-500 hover:text-orange-700"
            >
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
