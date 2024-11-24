import React from "react";
import StudentList from "../components/Students/StudentList";
import StudentForm from "../components/Students/StudentForm";

const StudentsPage = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold my-6">Students</h2>
      <StudentForm />
      <StudentList />
    </div>
  );
};

export default StudentsPage;
