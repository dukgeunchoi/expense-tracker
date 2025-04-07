import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./configs/mongodb.js";
import authRouter from "./routes/auth.js";
import incomeRouter from "./routes/income.js";
import expenseRouter from "./routes/expense.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRouter);
app.use("/api/income", incomeRouter);
app.use("/api/expense", expenseRouter);

app.listen(PORT, () => {
  connectDB();
  console.log("Server at http://localhost:3000");
});
