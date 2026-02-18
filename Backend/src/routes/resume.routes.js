const express = require("express");
const multer = require("multer");
const { uploadResume } = require("../controllers/resume.controller");

const router = express.Router();

// Multer setup: memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Single file upload + controller handler
router.post("/upload", upload.single("resume"), uploadResume);

module.exports = router;
