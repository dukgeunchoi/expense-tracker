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
expenseRouter.post("/add", protect, addExpense);
expenseRouter.delete("/delete/:id", protect, deleteExpense);
expenseRouter.put("/update/:id", protect, updateExpense);
expenseRouter.get("/download", protect, downloadExpenseExcel);

export default expenseRouter;
