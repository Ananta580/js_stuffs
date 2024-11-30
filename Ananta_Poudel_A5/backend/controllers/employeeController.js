const Employee = require("../models/employee");

const addOrUpdateEmployee = (req, res) => {
  const employee = req.body;

  if (
    !employee.first_name ||
    !employee.last_name ||
    !employee.salary ||
    !employee.department ||
    !employee.email
  ) {
    return res.status(400).send("Missing required fields");
  }

  Employee.saveEmployee(employee);
  res.status(200).send("Employee saved/updated successfully");
};

const getEmployees = (req, res) => {
  res.status(200).json(Employee.getAllEmployees());
};

const getEmployeeById = (req, res) => {
  const { id } = req.params;
  const employee = Employee.getEmployeeById(id);
  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.status(200).json(employee);
};

module.exports = { addOrUpdateEmployee, getEmployees, getEmployeeById };
