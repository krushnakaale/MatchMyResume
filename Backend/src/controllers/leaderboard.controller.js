exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = [
      { rank: 1, name: "Amit", score: 92 },
      { rank: 2, name: "Rahul", score: 88 },
      { rank: 3, name: "Sneha", score: 85 },
    ];

    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
