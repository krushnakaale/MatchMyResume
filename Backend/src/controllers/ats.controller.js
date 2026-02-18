exports.analyzeResume = async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;

    if (!resumeText || !jobDescription) {
      return res.status(400).json({ message: "Resume and JD required" });
    }

    // Dummy scoring logic (Hackathon version)
    const score = Math.floor(Math.random() * 40) + 60;

    res.status(200).json({
      overallScore: score,
      matchedSkills: ["React", "Node"],
      missingSkills: ["Docker"],
      message: "Analysis completed successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
