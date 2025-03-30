import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  source: {
    type: String,
    required: true,
  },
});
const Income = mongoose.model("Income", incomeSchema);
export default Income;