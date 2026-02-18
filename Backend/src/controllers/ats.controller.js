// Returns dummy ATS analysis
exports.analyzeResume = (req, res) => {
  try {
    res.status(200).json({
      score: 78,
      level: "Good Match",
      skillsMatched: ["React", "Docker"],
      totalSkills: ["React", "Node.js", "Docker", "MongoDB"],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
