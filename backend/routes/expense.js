import { Router } from "express";
import {
  getExpense,
  addExpense,
  deleteExpense,
  updateExpense,
  downloadExpenseExcel,
} from "../controllers/expense.js";
import { protect } from "../middleware/authMiddleware.js";

const expenseRouter = Router();

expenseRouter.get("/", protect, getExpense);
expenseRouter.post("/", protect, addExpense);
expenseRouter.delete("/:id", protect, deleteExpense);
expenseRouter.put("/:id", protect, updateExpense);
expenseRouter.get("/download", protect, downloadExpenseExcel);

export default expenseRouter;
