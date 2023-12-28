/* eslint-disable react/prop-types */
import { formatPercentage } from "../../../../../../../../helpers/formatters";

function SensTableItem({ idea, sensDisplay, v }) {
  const dp = idea.cp < v ? 1 - idea.cp / v : -(idea.cp / v - 1);
  return (
    <p
      className={`w-24 h-8 flex items-center justify-center font-semibold transition-all duration-200 ${
        v > idea.cp
          ? "text-blue-800 bg-blue-200/50"
          : "text-red-700 bg-orange-200/50"
      } ${sensDisplay === "Value" ? "" : "italic"}`}
    >
      {sensDisplay === "Value" ? v.toFixed(2) : formatPercentage(dp)}
    </p>
  );
}

export default SensTableItem;
