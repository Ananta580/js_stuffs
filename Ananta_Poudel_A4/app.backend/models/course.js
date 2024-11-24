import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
    required: true,
  },
});

const Course = model("Course", courseSchema);

export default Course;
