import { Router } from "express";
import {
  getIncome,
  addIncome,
  deleteIncome,
  updateIncome,
} from "../controllers/income.js";
import { protect } from "../middleware/authMiddleware.js";

const incomeRouter = Router();

incomeRouter.get("/", protect, getIncome);
incomeRouter.post("/", protect, addIncome);
incomeRouter.delete("/:id", protect, deleteIncome);
incomeRouter.put("/:id", protect, updateIncome);

export default incomeRouter;
