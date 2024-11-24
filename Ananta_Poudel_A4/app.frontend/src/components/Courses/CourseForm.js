import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const CourseForm = ({ OnAddUpdate }) => {
  const [course, setCourse] = useState({
    code: "",
    name: "",
    description: "",
    credits: "",
  });

  const { courseId } = useParams();
  const navigate = useNavigate();

  // Fetch the student data if an ID is provided (for editing)
  useEffect(() => {
    if (courseId) {
      axios
        .get(`http://localhost:3000/courses/${courseId}`)
        .then((response) => {
          setCourse(response.data);
        })
        .catch((error) => console.error("Error fetching course data", error));
    }
  }, [courseId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (courseId) {
      axios
        .put(`http://localhost:3000/courses/${courseId}`, course)
        .then(() => {
          setCourse({ code: "", name: "", description: "", credits: "" });
          navigate("/students");
          OnAddUpdate();
          alert("Course updated successfully!");
        })
        .catch((error) => console.error("Error updating course", error));
    } else {
      axios
        .post("http://localhost:3000/courses", course)
        .then(() => {
          setCourse({ code: "", name: "", description: "", credits: "" });
          OnAddUpdate();
          alert("Course created!");
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-4 flex items-end">
      <div className="flex flex-col">
        <label>Course Code</label>
        <input
          type="text"
          value={course.code}
          onChange={(e) => setCourse({ ...course, code: e.target.value })}
          className="dark-input"
          required
        />
      </div>
      <div className="flex flex-col">
        <label>Course Name</label>
        <input
          type="text"
          value={course.name}
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
          className="dark-input"
          required
        />
      </div>
      <div className="flex flex-col">
        <label>Description</label>
        <input
          type="text"
          value={course.description}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
          className="dark-input"
          required
        />
      </div>
      <div className="flex flex-col">
        <label>Credits</label>
        <input
          type="number"
          value={course.credits}
          onChange={(e) => setCourse({ ...course, credits: e.target.value })}
          className="dark-input"
          required
        />
      </div>
      <button type="submit" className="primary">
        {courseId ? "Update Course" : "Add Course"}
      </button>
    </form>
  );
};

export default CourseForm;
