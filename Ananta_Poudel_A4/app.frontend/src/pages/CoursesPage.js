import React from "react";
import CourseList from "../components/Courses/CourseList";
import CourseForm from "../components/Courses/CourseForm";

const CoursesPage = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold my-6">Courses</h2>
      <CourseForm />
      <CourseList />
    </div>
  );
};

export default CoursesPage;
