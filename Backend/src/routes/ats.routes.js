const express = require("express");
const router = express.Router();
const { getLatestATS } = require("../controllers/ats.controller");

// Example route
router.get("/latest", getLatestATS);

module.exports = router; // ✅ Must export the router directly
