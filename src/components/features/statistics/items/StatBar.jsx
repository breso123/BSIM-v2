import { useState } from "react";
import { formatInterface2 } from "../../../../helpers/formatters";

/* eslint-disable react/prop-types */
function StatBar({
  d,
  max,
  index,
  cols = ["midnightblue", "#4338ca"],
  width = "6rem",
  isFormated = true,
  valueFormated = true,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const col = cols[index];
  const height = {
    height: `${d === max ? "100%" : `${(d / max) * 100}%`}`,
    width,
    backgroundColor: col,
    boxShadow: isHovered ? "inset 0 0 5px white" : "",
  };
  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className="w-24 relative z-50 hover:cursor-pointer rounded-t-sm group transition-all duration-200"
      style={height}
    >
      <p
        style={{ color: col }}
        className="absolute top-[-30px] w-full text-center font-semibold text-sm opacity-60 group-hover:opacity-100"
      >
        {isFormated ? formatInterface2(d, valueFormated) : d}
      </p>
    </div>
  );
}

export default StatBar;
