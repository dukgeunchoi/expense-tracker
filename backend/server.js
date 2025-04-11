import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./configs/mongodb.js";
import authRouter from "./routes/auth.js";
import incomeRouter from "./routes/income.js";
import expenseRouter from "./routes/expense.js";
import path from "path";
import { fileURLToPath } from "url";
import dashboardRouter from "./routes/dashboard.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/income", incomeRouter);
app.use("/api/expense", expenseRouter);
app.use("/api/dashboard", dashboardRouter);

app.listen(PORT, () => {
  connectDB();
  console.log("Server at http://localhost:3000");
});

// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`Server running at http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error("Failed to start server:", error);
//   }
// };

// startServer();
