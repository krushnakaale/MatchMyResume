const express = require("express");
const router = express.Router();

const { createResume } = require("../controllers/resume.controller");

// POST /api/resume
router.post("/", createResume);

module.exports = router;
