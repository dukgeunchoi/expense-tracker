import Income from "../models/income.js";
import xlsx from "xlsx";

export const getIncome = async (req, res) => {
  const userId = req.userId;
  try {
    const income = await Income.find({ userId });
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ message: "Error fetching income data" });
  }
};

export const addIncome = async (req, res) => {
  const userId = req.userId;

  try {
    const { icon, amount, date, source } = req.body;
    if (!amount || !source) {
      return res.status(400).json({ message: "All fields are required" });
    }

    console.log("Creating income with:", {
      userId,
      icon,
      amount,
      date,
      source,
    });

    const newIncome = new Income({ userId, icon, amount, date, source });
    await newIncome.save();
    res.status(201).json(newIncome);
  } catch (error) {
    console.error("Error adding income:", error);
    res.status(500).json({
      message: "Error adding income",
      error: error.message,
    });
  }
};

export const deleteIncome = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedIncome = await Income.findByIdAndDelete(id);

    if (!deletedIncome) {
      return res.status(404).json({ message: "Income not found" });
    }
    res.status(200).json({ message: "Income deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting income" });
  }
};

export const updateIncome = async (req, res) => {
  const { id } = req.params;
  const { icon, amount, date, source } = req.body;
  try {
    const updatedIncome = await Income.findByIdAndUpdate(
      id,
      { icon, amount, date, source },
      { new: true }
    );

    if (!updatedIncome) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json(updatedIncome);
  } catch (error) {
    res.status(500).json({ message: "Error updating income" });
  }
};
