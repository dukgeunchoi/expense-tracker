import { Router } from "express";
import { getExpense, addExpense, deleteExpense, updateExpense } from "../controllers/expense.js";

const expenseRouter = Router();

expenseRouter.get("/", getExpense);
expenseRouter.post("/", addExpense);
expenseRouter.delete("/:id", deleteExpense);
expenseRouter.put("/:id", updateExpense);

export default expenseRouter;