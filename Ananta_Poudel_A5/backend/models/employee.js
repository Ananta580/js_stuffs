let employees = [
  {
    id: 1,
    first_name: "Ananta",
    last_name: "Poudel",
    salary: 50000,
    department: "IT",
    email: "ananta.poudel@gmail.com",
  },
];

const getAllEmployees = () => employees;
const getEmployeeById = (id) => employees.find((e) => e.id === Number(id));
const saveEmployee = (employee) => {
  const index = employees.findIndex((e) => e.id === employee.id);
  const newIndex = Math.max(...employees.map((e) => e.id)) + 1;
  employee.id = index === -1 ? newIndex : employee.id;
  if (index === -1) {
    employees.push(employee);
  } else {
    employees[index] = employee;
  }
};

module.exports = { getAllEmployees, getEmployeeById, saveEmployee };
