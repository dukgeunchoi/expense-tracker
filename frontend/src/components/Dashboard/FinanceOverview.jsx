import React from "react";
import CustomBarChart from "../Charts/CustomBarChart";

const COLOURS = ["#FA2C37", "#FF6900"];

const transformToStackedData = (entries) => {
  const income = {};
  const expense = {};

  entries.forEach((item) => {
    if (item.type === "income") {
      const key = item.source || "Other";
      income[key] = (income[key] || 0) + item.amount;
    } else if (item.type === "expense") {
      const key = item.category || "Other";
      expense[key] = (expense[key] || 0) + item.amount;
    }
  });

  return [
    { name: "Income", ...income },
    { name: "Expense", ...expense },
  ];
};

const FinanceOverview = ({ transactions }) => {
  const data = transformToStackedData(transactions);
  console.log("data", data);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Finance Overview</h5>
      </div>

      <CustomBarChart data={data} />
    </div>
  );
};

export default FinanceOverview;
