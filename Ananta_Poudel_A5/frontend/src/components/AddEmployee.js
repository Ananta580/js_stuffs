import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    id: "",
    first_name: "",
    last_name: "",
    salary: "",
    department: "",
    email: "",
  });

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5500/api/employees/${id}`)
        .then((response) => response.json())
        .then((data) => setEmployee(data))
        .catch((error) => console.error("Error fetching employee:", error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5500/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    })
      .then((data) => {
        alert(
          id ? "Employee updated successfully!" : "Employee added successfully!"
        );
        navigate("/");
      })
      .catch((error) => console.error("Error submitting employee:", error));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-emerald-700 mb-4">
        {id ? "Edit Employee" : "Add Employee"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="first_name"
          value={employee.first_name}
          onChange={handleChange}
          placeholder="First Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="last_name"
          value={employee.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="salary"
          value={employee.salary}
          onChange={handleChange}
          placeholder="Salary"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
          placeholder="Department"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-emerald-500 text-white p-2 rounded hover:bg-emerald-700"
        >
          {id ? "Update Employee" : "Add Employee"}
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
