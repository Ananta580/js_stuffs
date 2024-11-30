const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
const port = process.env.PORT || 5500;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/employees", employeeRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
