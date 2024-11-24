import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CourseList = forwardRef((props, ref) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:3000/courses/${_id}`)
      .then(() => setCourses(courses.filter((course) => course._id !== _id)))
      .catch((error) => console.error(error));
  };

  const getAllCourses = () => {
    axios
      .get("http://localhost:3000/courses")
      .then((response) => setCourses(response.data))
      .catch((error) => console.error(error));
  };

  useImperativeHandle(ref, () => ({
    getAllCourses,
  }));

  return (
    <div>
      <h3 className="text-lg font-semibold mt-10 mb-3">All Courses</h3>
      <table className="min-w-full bg-neutral-800">
        <thead>
          <tr>
            <th
              colSpan={2}
              align="left"
              className="py-2 px-4 border border-neutral-600 bg-neutral-950"
            >
              Course Code
            </th>
            <th
              colSpan={2}
              align="left"
              className="py-2 px-4 border border-neutral-600 bg-neutral-950"
            >
              Course Name
            </th>
            <th
              colSpan={2}
              align="left"
              className="py-2 px-4 border border-neutral-600 bg-neutral-950"
            >
              Credits
            </th>
            <th
              colSpan={4}
              align="left"
              className="py-2 px-4 border border-neutral-600 bg-neutral-950"
            >
              Description
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
          {courses.length === 0 ? (
            <tr>
              <td
                colSpan="12"
                className="py-10 px-4 border border-neutral-600 text-center"
              >
                No courses available
              </td>
            </tr>
          ) : (
            courses.map((course) => (
              <tr key={course._id} className="">
                <td colSpan={2} className="py-2 px-4 border border-neutral-600">
                  {course.code}
                </td>
                <td colSpan={2} className="py-2 px-4 border border-neutral-600">
                  {course.name}
                </td>
                <td colSpan={2} className="py-2 px-4 border border-neutral-600">
                  {course.credits}
                </td>
                <td colSpan={4} className="py-2 px-4 border border-neutral-600">
                  {course.description}
                </td>
                <td colSpan={2} className="py-2 px-4 border border-neutral-600">
                  <div>
                    <Link
                      to={`/courses/${course._id}`}
                      className="bg-neutral-700 hover:bg-neutral-600 px-4 py-1.5 rounded"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(course._id)}
                      className="bg-red-900 hover:bg-red-700 px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
});

export default CourseList;
