const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/profile.controller");

// ✅ Route uses function from controller
router.get("/:id", getProfile);

module.exports = router;
