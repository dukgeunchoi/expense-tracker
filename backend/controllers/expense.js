import Expense from "../models/expense.js";
import xlsx from "xlsx";

export const getExpense = async (req, res) => {
  const userId = req.userId;
  try {
    const expense = await Expense.find({ userId });
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expense data" });
  }
};

export const addExpense = async (req, res) => {
  const userId = req.userId;

  try {
    const { icon, amount, date, category } = req.body;
    if (!amount || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newExpense = new Expense({ userId, icon, amount, date, category });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    console.error("Error adding income:", error);
    res.status(500).json({
      message: "Error adding income",
      error: error.message,
    });
  }
};

export const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting expense" });
  }
};

export const updateExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const { icon, amount, date, category } = req.body;
    const updatedExpense = await Expense.findByIdAndUpdate(
      id,
      { icon, amount, date, category },
      { new: true }
    );

    if (!updatedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).json({ message: "Error updating expense" });
  }
};
