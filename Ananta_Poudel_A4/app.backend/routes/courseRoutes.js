import express from "express";
import courseController from "../controllers/courseController.js";

const router = express.Router();

// Define routes and map them to controller functions
router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);
router.post("/", courseController.createCourse);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);

export default router;
