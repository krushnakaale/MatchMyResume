const express = require("express");
const router = express.Router();
const { getLeaderboard } = require("../controllers/leaderboard.controller");

// ✅ Make sure getLeaderboard is a function
router.get("/top", getLeaderboard);

module.exports = router;
