import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StudentList = forwardRef((props, ref) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllStudents();
  }, []);

  useImperativeHandle(ref, () => ({
    getAllStudents,
  }));

  const getAllStudents = () => {
    axios
      .get("http://localhost:3000/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error(error));
  };

  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:3000/students/${_id}`)
      .then(() =>
        setStudents(students.filter((student) => student._id !== _id))
      )
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mt-10 mb-3">All Students</h3>
      <table className="min-w-full bg-neutral-800">
        <thead>
          <tr>
            <th
              colSpan={2}
              align="left"
              className="py-2 px-4 border border-neutral-600 bg-neutral-950"
            >
              Student ID
            </th>
            <th
              colSpan={2}
              align="left"
              className="py-2 px-4 border border-neutral-600 bg-neutral-950"
            >
              Student Name
            </th>
            <th
              colSpan={2}
              align="left"
              className="py-2 px-4 border border-neutral-600 bg-neutral-950"
            >
              Semester
            </th>
            <th
              colSpan={4}
              align="left"
              className="py-2 px-4 border border-neutral-600 bg-neutral-950"
            >
              Courses
            </th>
            <th
              colSpan={2}
              align="left"
              className="py-2 px-4 border border-neutral-600 bg-neutral-950"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td
                colSpan="12"
                className="py-10 px-4 border border-neutral-600 text-center"
              >
                No students available
              </td>
            </tr>
          ) : (
            students.map((student) => (
              <tr key={student._id} className="">
                <td colSpan={2} className="py-2 px-4 border border-neutral-600">
                  {student.studentId}
                </td>
                <td colSpan={2} className="py-2 px-4 border border-neutral-600">
                  {student.firstName} {student.lastName}
                </td>
                <td colSpan={2} className="py-2 px-4 border border-neutral-600">
                  {student.semester}
                </td>
                <td colSpan={4} className="py-2 px-4 border border-neutral-600">
                  {student.courses.map((course) => course.name).join(", ")}
                </td>
                <td colSpan={2} className="py-2 px-4 border border-neutral-600">
                  <Link
                    to={`/students/${student._id}`}
                    className="bg-neutral-700 hover:bg-neutral-600 px-4 py-1.5 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(student._id)}
                    className="bg-red-900 hover:bg-red-700 px-2 py-1 ml-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
});

export default StudentList;
