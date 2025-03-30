import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './configs/mongodb.js';
import incomeRouter from './routes/income.js';
import expenseRouter from './routes/expense.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/income", incomeRouter);
app.use("/api/expense", expenseRouter);

app.listen(PORT, ()=> {
    connectDB();
    console.log(process.env.MONGO_URI)
    console.log("Server at http://localhost:3000")
})