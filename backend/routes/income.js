import { Router } from "express";
import { getIncome, addIncome, deleteIncome, updateIncome } from "../controllers/income.js";

const incomeRouter = Router();

incomeRouter.get("/", getIncome);
incomeRouter.post("/", addIncome);
incomeRouter.delete("/:id", deleteIncome);
incomeRouter.put("/:id", updateIncome);

export default incomeRouter;