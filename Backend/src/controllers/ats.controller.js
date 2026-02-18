import Score from "../models/score.model.js";

export const getLatestATS = async (req, res) => {
  try {
    const latest = await Score.findOne().sort({ createdAt: -1 });
    res.json({
      score: latest?.score || 0,
      keywordsFound: latest?.keywords?.length || 0,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
