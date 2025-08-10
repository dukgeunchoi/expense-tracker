import { Router } from "express";
import { checkHealth } from "../controllers/health.js";

const healthRouter = Router();

healthRouter.get("/", checkHealth);

export default healthRouter;
