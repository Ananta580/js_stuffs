import React, { useRef } from "react";
import StudentList from "../components/Students/StudentList";
import StudentForm from "../components/Students/StudentForm";

const StudentsPage = () => {
  const studentListRef = useRef();

  const updateList = () => {
    if (studentListRef.current) {
      studentListRef.current.getAllStudents();
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-bold my-6">Students</h2>
      <StudentForm OnAddUpdate={updateList} />
      <StudentList ref={studentListRef} />
    </div>
  );
};

export default StudentsPage;
