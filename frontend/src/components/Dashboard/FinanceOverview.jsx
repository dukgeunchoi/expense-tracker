import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLOURS = ["#875CF5", "#22c55e", "#FA2C37"];

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const data = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Income", amount: totalIncome },
    { name: "Total Expense", amount: totalExpense },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Finance Overview</h5>
      </div>

      <CustomPieChart
        data={data}
        label="Total Balance"
        totalAmount={`$${totalBalance}`}
        colours={COLOURS}
        showTextAnchor={true}
      />
    </div>
  );
};

export default FinanceOverview;
