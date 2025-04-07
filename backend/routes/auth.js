import { Router } from "express";
import { register, login, getUserInfo } from "../controllers/auth.js";

const authRouter = Router();

authRouter.post("/signup", register);
authRouter.post("/login", login);
authRouter.get("/info", protect, getUserInfo);

export default authRouter;
