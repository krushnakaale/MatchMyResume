// // Returns static top performers
// exports.getLeaderboard = async (req, res) => {
//   try {
//     res.status(200).json([
//       { name: "Aarav Shah", role: "Full Stack Dev", score: 980 },
//       { name: "Priya Nair", role: "ML Engineer", score: 870 },
//       { name: "Rohit Kulkarni", role: "Backend Dev", score: 810 },
//       { name: "Sneha Patil", role: "UI Designer", score: 740 },
//       { name: "Dev Mehta", role: "DevOps Eng", score: 690 },
//     ]);
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// };

const User = require("../models/user.model");

exports.getLeaderboard = async (req, res) => {
  try {
    // Fetch all users
    const users = await User.find();

    // Map users to leaderboard format
    const leaderboard = users
      .map((user) => ({
        name: user.name,
        role: user.role,
        averageScore: user.averageScore, // uses virtual
        totalAttempts: user.totalAttempts, // uses virtual
        avatar: user.avatar,
      }))
      // Sort by averageScore descending
      .sort((a, b) => b.averageScore - a.averageScore)
      // Optional: get top 10
      .slice(0, 10);

    res.status(200).json(leaderboard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
