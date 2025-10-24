import jwt from "jsonwebtoken";
import User from "../models/userModel.mjs";
import { JWT_SECRET } from "../config/jwtConfig.mjs";

// Login route - generate token
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create payload for JWT
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    // Sign token
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Protected profile route
export const profile = (req, res) => {
  res.json({ message: "Profile accessed", user: req.user });
};

// Admin route example (optional: agar tum role field add karna chaho to)
export const admin = (req, res) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Access denied: admin role required" });
  }
  res.json({ message: "Admin panel accessed" });
};
