import Expense from "../models/expense.js";

export const getExpense = async (req, res) => {
  try {
    const expense = await Expense.find();
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expense data" });
  }
}

export const addExpense = async (req, res) => {
  const { amount, date, category } = req.body;
  try {
    const newExpense = new Expense({ amount, date, category });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: "Error adding expense" });
  }
}

export const deleteExpense = async (req, res) => {
    const { id } = req.params;
    try {
        await Expense.findByIdAndDelete(id);
        res.status(200).json({ message: "Expense deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting expense" });
    }
}

export const updateExpense = async (req, res) => {
    const { id } = req.params;
    const { amount, date, category } = req.body;
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(id, { amount, date, category }, { new: true });
        res.status(200).json(updatedExpense);
    } catch (error) {
        res.status(500).json({ message: "Error updating expense" });
    }
}