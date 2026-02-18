const express = require("express");
const router = express.Router();
const { analyzeResume } = require("../controllers/ats.controller"); // make sure this exists

// Route to get dummy ATS analysis
router.get("/latest", analyzeResume);

module.exports = router; // ✅ Must export the router
