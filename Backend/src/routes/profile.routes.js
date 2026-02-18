const express = require("express");
const router = express.Router();

const { getProfile } = require("../controllers/profile.controller");

// GET /api/profile
router.get("/", getProfile);

module.exports = router;
