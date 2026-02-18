const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    jobTitle: { type: String, required: true },
    score: { type: Number, required: true },
    skillsMatched: [String],
    totalSkills: [String],
    date: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

// Static method to get latest N scores for a user
scoreSchema.statics.getLatestScores = async function (userId, limit = 10) {
  return this.find({ user: userId })
    .sort({ date: -1 }) // newest first
    .limit(limit);
};

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
