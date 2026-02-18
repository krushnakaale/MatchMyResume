// Backend/src/routes/resume.routes.js
const express = require("express");
const router = express.Router();

// Import the controller
const { uploadResume } = require("../controllers/resume.controller");

// POST endpoint to upload resume
router.post("/upload", uploadResume); // ✅ pass function reference

// Add more resume-related endpoints here if needed
// router.get("/history", getResumeHistory);

module.exports = router;
