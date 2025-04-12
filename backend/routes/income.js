import { Router } from "express";
import {
  getIncome,
  addIncome,
  deleteIncome,
  updateIncome,
  downloadIncomeExcel,
} from "../controllers/income.js";
import { protect } from "../middleware/authMiddleware.js";

const incomeRouter = Router();

incomeRouter.get("/", protect, getIncome);
incomeRouter.post("/add", protect, addIncome);
incomeRouter.delete("/delete/:id", protect, deleteIncome);
incomeRouter.put("/update/:id", protect, updateIncome);
incomeRouter.get("/download", protect, downloadIncomeExcel);

export default incomeRouter;
