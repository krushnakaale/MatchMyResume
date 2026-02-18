import Score from "../models/score.model.js";

export const getStats = async (req, res) => {
  try {
    const totalResumes = await Score.countDocuments();
    const highScore = await Score.findOne().sort({ score: -1 });

    res.json({
      totalResumes,
      highScore: highScore?.score || 0,
      systemAccuracy: 95, // You can calculate dynamically later
      registeredApplicants: 500, // Example placeholder
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
