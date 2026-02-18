// Backend/src/controllers/resume.controller.js

// Dummy handler for resume upload
const uploadResume = (req, res) => {
  // For now just return a success message
  // Later, you can integrate file parsing, AI validation, or DB save
  res.json({
    message: "Resume uploaded successfully!",
    data: req.body, // temporary placeholder
  });
};

// Export as an object
module.exports = {
  uploadResume,
};
