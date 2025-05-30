import { Router } from "express";
import {
  register,
  login,
  getUserInfo,
  updateUserProfile,
  changePassword,
} from "../controllers/auth.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const authRouter = Router();

authRouter.post("/signup", register);
authRouter.post("/login", login);
authRouter.get("/info", protect, getUserInfo);
authRouter.put("/update", protect, updateUserProfile);
authRouter.put("/change-password", protect, changePassword);
authRouter.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res.status(200).json({ imageUrl });
});
authRouter.put("/update-image", protect, upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res.status(200).json({ imageUrl });
});

export default authRouter;
