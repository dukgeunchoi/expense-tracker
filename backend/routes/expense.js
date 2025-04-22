import { Router } from "express";
import {
  getExpense,
  addExpense,
  deleteExpense,
  updateExpense,
} from "../controllers/expense.js";
import { protect } from "../middleware/authMiddleware.js";

const expenseRouter = Router();

expenseRouter.get("/", protect, getExpense);
expenseRouter.post("/add", protect, addExpense);
expenseRouter.delete("/delete/:id", protect, deleteExpense);
expenseRouter.put("/update/:id", protect, updateExpense);

export default expenseRouter;
