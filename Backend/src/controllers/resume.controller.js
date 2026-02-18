// Dummy handler for resume upload
const uploadResume = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const fileInfo = {
      originalName: req.file.originalname,
      mimeType: req.file.mimetype,
      sizeKB: Math.round(req.file.size / 1024),
    };

    // Dummy ATS result
    const result = {
      score: 78,
      level: "Good Match",
      skillsMatched: ["React", "Docker"],
      totalSkills: ["React", "Node.js", "Docker", "MongoDB"],
    };

    res.status(200).json({
      message: "Resume uploaded successfully!",
      file: fileInfo,
      result,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { uploadResume };
