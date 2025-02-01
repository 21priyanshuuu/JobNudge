import mongoose from "mongoose";

const userFormData = new mongoose.Schema(
  {
    userId: { type: String, required: true, index: true },
    jobRecommendation: { type: String, required: true },
    logical_quotient: { type: Number, required: true, default: 0 },
    hackathons: { type: Number, required: true, default: 0 },
    coding_skills: { type: Number, required: true, default: 0 },
    public_speaking: { type: Number, required: true, default: 0 },
    self_learning: { type: String, enum: ["yes", "no"], required: true },
    extra_courses: { type: String, enum: ["yes", "no"], required: true },
    certifications: { type: String, required: true },
    workshops: { type: String, required: true },
    reading_writing: {
      type: String,
      enum: ["excellent", "medium", "poor"],
      required: true,
    },
    memory_capability: {
      type: String,
      enum: ["excellent", "medium", "poor"],
      required: true,
    },
    interested_subjects: { type: String, required: true },
    interested_career_area: { type: String, required: true },
    company_type: { type: String, required: true },
    senior_inputs: { type: String, enum: ["yes", "no"], required: true },
    book_type: { type: String, required: true },
    management_or_technical: {
      type: String,
      enum: ["Management", "Technical"],
      required: true,
    },
    worker_type: {
      type: String,
      enum: ["hard worker", "smart worker"],
      required: true,
    },
    teamwork: { type: String, enum: ["yes", "no"], required: true },
    introvert: { type: String, enum: ["yes", "no"], required: true },
  },
  { timestamps: true }
);

const UserData =
  mongoose.models.UserInfosData ||
  mongoose.model("UserInfosData", userFormData);

export default UserData;
