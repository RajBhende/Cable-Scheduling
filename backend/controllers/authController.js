const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// 👉 LOGIN CONTROLLER
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token, role: user.role });
  } catch (err) {
    console.error("❌ Login error:", err.message);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// 👉 SET PASSWORD CONTROLLER
exports.setPassword = async (req, res) => {
  const { token, password } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ msg: "Password set successfully" });
  } catch (err) {
    console.error("❌ Error in setPassword:", err.message);
    return res.status(400).json({ msg: "Invalid or expired token" });
  }
};
