import { Router } from "express";
import { getDashboardData } from "../controllers/dashboard.js";
import { protect } from "../middleware/authMiddleware.js";

const dashboardRouter = Router();

dashboardRouter.get("/", protect, getDashboardData);

export default dashboardRouter;
