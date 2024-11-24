import React, { useState } from "react";
import axios from "axios";

const CourseForm = () => {
  const [course, setCourse] = useState({
    code: "",
    name: "",
    description: "",
    credits: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/courses", course)
      .then(() => {
        setCourse({ code: "", name: "", description: "", credits: "" });
        alert("Course created!");
      })
      .catch((error) => console.error(error));
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
        Add Course
      </button>
    </form>
  );
};

export default CourseForm;
