const express = require("express");
const router = express.Router();

const { analyzeResume } = require("../controllers/ats.controller");

// POST /api/analyze
router.post("/", analyzeResume);

module.exports = router;
