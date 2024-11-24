import express, { json } from "express";
import { connect, set } from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(json());
app.use(cors());

set("strictQuery", false);
// MongoDB connection
connect("mongodb://localhost:27017/school", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
