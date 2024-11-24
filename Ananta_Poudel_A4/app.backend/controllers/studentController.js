import Student from "../models/student.js";

const studentController = {
  getAllStudents: async (req, res) => {
    try {
      const students = await Student.find().populate("courses");
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getStudentById: async (req, res) => {
    try {
      const student = await Student.findById(req.params.id).populate("courses");
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createStudent: async (req, res) => {
    const newStudent = new Student({ ...req.body });

    try {
      const savedStudent = await newStudent.save();
      res.status(201).json(savedStudent);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateStudent: async (req, res) => {
    try {
      const updatedStudent = await Student.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
      ).populate("courses");

      if (!updatedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }

      res.status(200).json(updatedStudent);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteStudent: async (req, res) => {
    try {
      const deletedStudent = await Student.findByIdAndDelete(req.params.id);

      if (!deletedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }

      res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default studentController;
