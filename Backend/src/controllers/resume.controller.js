exports.createResume = async (req, res) => {
  try {
    const { name, email, skills, experience, education } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and Email required" });
    }

    res.status(200).json({
      message: "Resume created successfully",
      resumeData: {
        name,
        email,
        skills,
        experience,
        education,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
