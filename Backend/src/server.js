const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });

// Route imports
const atsRoutes = require("./routes/ats.routes");
const profileRoutes = require("./routes/profile.routes");
const leaderboardRoutes = require("./routes/leaderboard.routes");
const resumeRoutes = require("./routes/resume.routes");

// DB connection
const mongoose = require("mongoose");

const app = express();

/* -------------------- MIDDLEWARE -------------------- */

// Enable CORS
app.use(cors());

// Parse JSON
app.use(express.json());

// Parse URL encoded data
app.use(express.urlencoded({ extended: true }));

console.log("MONGO_URI:", process.env.MONGO_URI);

/* -------------------- DATABASE CONNECTION -------------------- */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
  });

/* -------------------- ROUTES -------------------- */

app.use("/api/analyze", atsRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/resume", resumeRoutes);

/* -------------------- ROOT ROUTE -------------------- */

app.get("/", (req, res) => {
  res.json({
    message: "AI Resume–Job Matching Engine API Running 🚀",
  });
});

/* -------------------- SERVER -------------------- */

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/`);
});
