import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomDashboardToolTip from "./CustomDashboardToolTip";

const CustomBarChart = ({ data }) => {
  const keys = Array.from(
    new Set(
      data.flatMap((entry) => Object.keys(entry).filter((k) => k !== "name"))
    )
  );

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" interval={0} padding={{ left: 80, right: 80 }} />
        <YAxis />
        <Tooltip content={<CustomDashboardToolTip />} />
        {keys.map((key, idx) => (
          <Bar
            key={key}
            dataKey={key}
            stackId={
              data.find((d) => d[key])?.name === "Income" ? "income" : "expense"
            }
            fill={getColor(idx)}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

const COLORS = [
  "#4ade80",
  "#22d3ee",
  "#a78bfa",
  "#f87171",
  "#facc15",
  "#60a5fa",
  "#fb923c",
  "#34d399",
];

const getColor = (index) => COLORS[index % COLORS.length];

export default CustomBarChart;
