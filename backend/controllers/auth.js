import User from "../models/user.js";
import jwt from "jsonwebtoken";

// generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

// Register a new user
export const register = async (req, res) => {
  const { fullName, email, password, profileImageUrl } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({
      fullName,
      email,
      password,
      profileImageUrl,
    });
    await newUser.save();
    res.status(201).json({
      id: newUser._id,
      newUser,
      token: generateToken(newUser._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
};

// Login user
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      id: user._id,
      user,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
};

// Get user info
export const getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user info" });
    console.log(error);
  }
};

// // Reset password
// export const resetPassword = async (req, res) => {
//   const { email, newPassword } = req.body;

//   if (!email || !newPassword) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.password = newPassword;
//     await user.save();
//     res.status(200).json({ message: "Password reset successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error resetting password" });
//   }
// };

// // Update user profile
// export const updateProfile = async (req, res) => {
//   const { fullName, email, profileImageUrl } = req.body;

//   if (!fullName || !email) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const user = await User.findByIdAndUpdate(
//       req.user.id,
//       { fullName, email, profileImageUrl },
//       { new: true }
//     );
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating profile" });
//   }
// };
