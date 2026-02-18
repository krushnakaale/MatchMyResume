exports.getProfile = async (req, res) => {
  try {
    res.status(200).json({
      name: "Rahul Patil",
      email: "rahul@gmail.com",
      role: "Job Seeker",
      joinedAt: "Jan 2026",
      totalAttempts: 5,
      averageScore: 78,
      avatar: "https://i.pravatar.cc/150?img=12", // Dummy avatar
      posts: 12,
      followers: 340,
      following: 180,
      history: [
        { activity: "Applied for Frontend Developer role", date: "2026-01-10" },
        { activity: "Completed React project assessment", date: "2026-01-05" },
        { activity: "Updated resume", date: "2026-01-02" },
      ],
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// const User = require("../models/user.model");

// // Get a user by ID
// exports.getProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     res.status(200).json({
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       avatar: user.avatar,
//       joinedAt: user.joinedAt,
//       posts: user.posts,
//       followers: user.followers,
//       following: user.following,
//       history: user.history,
//       totalAttempts: user.totalAttempts,
//       averageScore: user.averageScore,
//       atsAttempts: user.atsAttempts,
//       resume: user.resume,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Add ATS attempt
// exports.addATSAttempt = async (userId, attemptData) => {
//   const user = await User.findById(userId);
//   if (!user) throw new Error("User not found");

//   user.atsAttempts.push(attemptData);
//   await user.save();
//   return user;
// };

// // Update resume info
// exports.uploadResume = async (userId, fileData) => {
//   const user = await User.findById(userId);
//   if (!user) throw new Error("User not found");

//   user.resume = {
//     filename: fileData.originalName,
//     mimeType: fileData.mimeType,
//     sizeKB: fileData.sizeKB,
//     uploadedAt: new Date(),
//   };
//   await user.save();
//   return user;
// };
