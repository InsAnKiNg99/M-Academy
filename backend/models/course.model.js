import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    duration: {
      type: String,
      required: true
      // e.g. "3 months", "12 weeks"
    },

    schedule: {
      type: String,
      required: true
      // e.g. "Mon–Wed–Fri, 5–7 PM"
    },

    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner"
    },

    instructorName: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    seatsAvailable: {
      type: Number,
      required: true
    },

    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open"
    }
  },
  {
    timestamps: true
  }
);

const courses =  mongoose.model("courses", Schema);
export default courses;
