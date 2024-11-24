import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { useParams, useNavigate } from "react-router-dom";

const StudentForm = () => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    studentId: "",
    semester: "",
    courses: [],
  });
  const [courses, setCourses] = useState([]);
  const { studentId } = useParams();
  const navigate = useNavigate();

  // Fetch courses when the form loads
  useEffect(() => {
    axios
      .get("http://localhost:3000/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => console.error("Error fetching courses", error));
  }, []);

  // Fetch the student data if an ID is provided (for editing)
  useEffect(() => {
    if (studentId) {
      axios
        .get(`http://localhost:3000/students/${studentId}`)
        .then((response) => {
          response.data.courses = response.data.courses.map((x) => x._id);
          setStudent(response.data);
        })
        .catch((error) => console.error("Error fetching student data", error));
    }
  }, [studentId]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (studentId) {
      axios
        .put(`http://localhost:3000/students/${studentId}`, student)
        .then((response) => {
          alert("Student updated successfully!");
          navigate("/students");
        })
        .catch((error) => console.error("Error updating student", error));
    } else {
      // Create new student
      axios
        .post("http://localhost:3000/students", student)
        .then((response) => {
          alert("Student created successfully!");
          navigate("/students");
        })
        .catch((error) => console.error("Error creating student", error));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-4 flex items-end">
      <div className="flex flex-col">
        <label>First Name</label>
        <input
          className="dark-input w-40"
          type="text"
          value={student.firstName}
          onChange={(e) =>
            setStudent({ ...student, firstName: e.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label>Last Name</label>
        <input
          className="dark-input w-40"
          type="text"
          value={student.lastName}
          onChange={(e) => setStudent({ ...student, lastName: e.target.value })}
          required
        />
      </div>
      <div className="flex flex-col">
        <label>Student ID</label>
        <input
          className="dark-input"
          type="text"
          value={student.studentId}
          onChange={(e) =>
            setStudent({ ...student, studentId: e.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label>Semester</label>
        <input
          className="dark-input"
          type="text"
          value={student.semester}
          onChange={(e) => setStudent({ ...student, semester: e.target.value })}
          required
        />
      </div>
      <div className="flex flex-col min-w-72 max-w-72">
        <label>Courses</label>
        <Select
          isClearable={false}
          className="s-container"
          classNamePrefix="s-select"
          value={courses
            .filter((course) => student.courses.includes(course._id))
            .map((course) => ({ value: course._id, label: course.name }))}
          onChange={(selectedOptions) => {
            const selectedCourses = selectedOptions
              ? selectedOptions.map((option) => option.value)
              : [];
            setStudent({ ...student, courses: selectedCourses });
          }}
          options={courses.map((course) => ({
            value: course._id,
            label: course.name,
          }))}
          isMulti
        />
      </div>
      <button type="submit" className="primary">
        {studentId ? "Update" : "Create"} Student
      </button>
    </form>
  );
};

export default StudentForm;
