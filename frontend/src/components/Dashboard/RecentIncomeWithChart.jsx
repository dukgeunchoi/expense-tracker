import React, { useEffect, useState } from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const [chartData, setChartData] = useState([]);

  const COLOURS = ["#875CF5", "#FA2C37", "#FF6900", "#4f39f6"];

  const prepareChartData = () => {
    const result = data?.map((item) => ({
      name: item?.source,
      amount: item?.amount,
    }));

    const grouped = result.reduce((acc, curr) => {
      const found = acc.find((item) => item.name === curr.name);
      if (found) {
        found.amount += curr.amount;
      } else {
        acc.push({ ...curr });
      }
      return acc;
    }, []);

    setChartData(grouped);
  };

  useEffect(() => {
    prepareChartData();

    return () => {};
  }, [data]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 60 Days Income</h5>
      </div>

      <CustomPieChart
        data={chartData}
        label="Total Income"
        totalAmount={`$${totalIncome}`}
        colours={COLOURS}
        showTextAnchor={true}
      />
    </div>
  );
};

export default RecentIncomeWithChart;
