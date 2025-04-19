import React from "react";

const CustomDashboardToolTip = ({ active, payload, coordinate }) => {
  console.log("CustomDashboardToolTip", { active, payload });
  if (active && payload && payload.length > 0) {
    // Find the segment that's being hovered
    // We can identify the active item by checking which one has the highest y-coordinate value
    // that is less than or equal to the current mouse y-coordinate
    const activeItem =
      payload.find(
        (item) =>
          coordinate &&
          item.payload &&
          coordinate.y >= item.payload[`${item.dataKey}Y0`] &&
          coordinate.y <= item.payload[`${item.dataKey}Y1`]
      ) || payload[0]; // Fallback to first item if no match

    // Display the information for the hovered segment
    const { name, value, dataKey } = activeItem;

    return (
      <div className="bg-white p-2 rounded shadow text-sm">
        <p className="font-semibold">{dataKey}</p>
        <p>${value}</p>
      </div>
    );
  }

  return null;
};

export default CustomDashboardToolTip;
