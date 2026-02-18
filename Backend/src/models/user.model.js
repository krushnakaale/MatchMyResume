const mongoose = require("mongoose");

// Define a schema for ATS attempts
const atsAttemptSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  score: { type: Number, required: true },
  skillsMatched: [String],
  totalSkills: [String],
  date: { type: Date, default: Date.now },
});

// User schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: "Job Seeker" },
    avatar: { type: String }, // URL of profile pic
    password: { type: String, required: false }, // optional if auth added later
    joinedAt: { type: Date, default: Date.now },
    posts: { type: Number, default: 0 },
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 },
    history: [
      {
        activity: String,
        date: { type: Date, default: Date.now },
      },
    ],
    atsAttempts: [atsAttemptSchema], // store ATS scores and attempts
    resume: {
      filename: String,
      mimeType: String,
      sizeKB: Number,
      uploadedAt: { type: Date, default: Date.now },
    },
  },
  { timestamps: true },
);

// Virtual for average ATS score
userSchema.virtual("averageScore").get(function () {
  if (!this.atsAttempts || this.atsAttempts.length === 0) return 0;
  const total = this.atsAttempts.reduce((sum, a) => sum + a.score, 0);
  return Math.round(total / this.atsAttempts.length);
});

// Virtual for total attempts
userSchema.virtual("totalAttempts").get(function () {
  return this.atsAttempts ? this.atsAttempts.length : 0;
});

// Compile model
const User = mongoose.model("User", userSchema);

module.exports = User;
