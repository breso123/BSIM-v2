import { useState } from "react";

/* eslint-disable react/prop-types */
function BarTrend({ v, max, col, period }) {
  const [isHovered, setIsHovered] = useState(false);
  const style = {
    width: v === max ? "100%" : `${(v / max) * 100}%`,
    backgroundColor: col,
    boxShadow: isHovered ? "inset 0 0 5px white" : "",
  };

  return (
    <div
      style={style}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className="h-7 relative rounded-r-full transition-all duration-200 group hover:cursor-pointer"
    >
      <p className="w-32 flex items-center justify-between absolute top-[20%] left-[5px] text-sky-200/75 opacity-70 text-xs group-hover:opacity-100">
        {period}: <span>{v.toFixed(2)}</span>
      </p>
    </div>
  );
}

export default BarTrend;
