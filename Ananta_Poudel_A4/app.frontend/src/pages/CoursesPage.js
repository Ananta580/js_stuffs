import React, { useRef } from "react";
import CourseList from "../components/Courses/CourseList";
import CourseForm from "../components/Courses/CourseForm";

const CoursesPage = () => {
  const courseListRef = useRef();

  const updateList = () => {
    if (courseListRef.current) {
      courseListRef.current.getAllCourses();
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-bold my-6">Courses</h2>
      <CourseForm OnAddUpdate={updateList} />
      <CourseList ref={courseListRef} />
    </div>
  );
};

export default CoursesPage;
