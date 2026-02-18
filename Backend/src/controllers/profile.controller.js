exports.getProfile = async (req, res) => {
  try {
    res.status(200).json({
      name: "Rahul Patil",
      email: "rahul@gmail.com",
      role: "Job Seeker",
      joinedAt: "Jan 2026",
      totalAttempts: 5,
      averageScore: 78,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
