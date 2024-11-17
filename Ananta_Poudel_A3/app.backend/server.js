const express = require("express");
const session = require("express-session");
const authController = require("./controllers/authController");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5500;

mongoose
  .connect("mongodb://localhost:27017/assignment3")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Could not connect to MongoDB:", error));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(
  session({
    secret: "JWT_SECRET_TOKEN",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Routes
app.use("/auth", authController);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
