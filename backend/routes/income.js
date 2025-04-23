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
incomeRouter.post("/add", protect, addIncome);
incomeRouter.delete("/delete/:id", protect, deleteIncome);
incomeRouter.put("/update/:id", protect, updateIncome);

export default incomeRouter;
