import { Router } from "express";
import studentController from "../controllers/studentController.js";

const router = Router();

// Define routes and map them to controller functions
router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.post("/", studentController.createStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

export default router;
