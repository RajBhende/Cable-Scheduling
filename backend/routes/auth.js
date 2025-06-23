const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { login, setPassword } = require("../controllers/authController");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");

// Login route
router.post("/login", login);
router.post('/set-password', setPassword); 

// ✅ Send Invite Route
router.post("/send-invite", async (req, res) => {
  const { email } = req.body;

  try {
    // Check if user already exists 
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create user with no password yet
    const newUser = new User({ email, role: "client" });
    await newUser.save();

    // Generate token and invite link
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const link = `http://localhost:5173/setpassword?token=${token}`;

    // Send email
    await sendEmail(
      email,
      "Set Your Password - Cable Scheduler",
      `<p>Hello! Click below to set your password:</p><a href="${link}">${link}</a>`
    );

    res.status(200).json({ msg: "✅ Invite sent to client." });
  } catch (err) {
    console.error("Invite Error:", err.message);
    res.status(500).json({ msg: "❌ Server Error", error: err.message });
  }
});

module.exports = router;
