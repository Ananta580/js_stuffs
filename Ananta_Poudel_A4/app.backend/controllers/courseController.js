import Course from "../models/course.js";

const courseController = {
  getAllCourses: async (req, res) => {
    try {
      const courses = await Course.find();
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getCourseById: async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.status(200).json(course);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createCourse: async (req, res) => {
    const { code, name, description, credits } = req.body;
    const newCourse = new Course({ code, name, description, credits });

    try {
      const savedCourse = await newCourse.save();
      res.status(201).json(savedCourse);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateCourse: async (req, res) => {
    const { code, name, description, credits } = req.body;

    try {
      const updatedCourse = await Course.findByIdAndUpdate(
        req.params.id,
        { code, name, description, credits },
        { new: true }
      );

      if (!updatedCourse) {
        return res.status(404).json({ message: "Course not found" });
      }

      res.status(200).json(updatedCourse);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteCourse: async (req, res) => {
    try {
      const deletedCourse = await Course.findByIdAndDelete(req.params.id);

      if (!deletedCourse) {
        return res.status(404).json({ message: "Course not found" });
      }

      res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default courseController;
