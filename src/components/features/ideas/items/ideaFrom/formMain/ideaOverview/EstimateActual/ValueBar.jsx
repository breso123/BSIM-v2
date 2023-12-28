/* eslint-disable react/prop-types */
import { useState } from "react";
import ValueBox from "./ValueBox";

function ValueBar({ t, max, valuation }) {
  const [hovered, setHovered] = useState(false);
  const hSales = {
    height: t.value === max ? "100%" : `${(t.value / max) * 100}%`,
    backgroundColor: t.type === "act" ? "#1e3a8a" : "#818cf8",
  };
  const hProfit = {
    height: `${(Math.abs(t.item) / t.value) * 100}%`,
    backgroundColor:
      t.type === "act"
        ? `${t.item < 0 ? "#fca5a5" : "#7dd3fc"}`
        : `${t.item < 0 ? "#fdba74" : "#bfdbfe"}`,
  };

  return (
    <div
      style={hSales}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className="w-7 flex items-end justify-center rounded-t-sm hover:shadow-hoverFins2 transition-all duration-200 relative"
    >
      {valuation !== "P/S" && (
        <div style={hProfit} className={`w-6 mb-0.5 rounded-t-sm`}></div>
      )}
      {hovered && <ValueBox t={t} valuation={valuation} />}
    </div>
  );
}

export default ValueBar;
