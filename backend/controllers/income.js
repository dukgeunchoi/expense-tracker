import Income from "../models/income.js";

export const getIncome = async (req, res) => {
  try {
    const income = await Income.find();
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ message: "Error fetching income data" });
  }
};

export const addIncome = async (req, res) => {
  const userId = req.userId;

  try {
    const { icon, amount, date, source } = req.body;
    if (!amount || !date || !source) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newIncome = new Income({ userId, icon, amount, date, source });
    await newIncome.save();
    res.status(201).json(newIncome);
  } catch (error) {
    res.status(500).json({ message: "Error adding income" });
  }
};

export const deleteIncome = async (req, res) => {
  const { id } = req.params;
  try {
    await Income.findByIdAndDelete(id);
    res.status(200).json({ message: "Income deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting income" });
  }
};

export const updateIncome = async (req, res) => {
  const { id } = req.params;
  const { amount, date, source } = req.body;
  try {
    const updatedIncome = await Income.findByIdAndUpdate(
      id,
      { amount, date, source },
      { new: true }
    );
    res.status(200).json(updatedIncome);
  } catch (error) {
    res.status(500).json({ message: "Error updating income" });
  }
};
