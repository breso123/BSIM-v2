import { useState } from "react";

/* eslint-disable react/prop-types */
function BarFinsInner({ stat, max, index, onSetItemIndex, onSetCagr }) {
  const [isHovered, setIsHovered] = useState(false);

  const abs = Math.abs(stat.value);
  const color = stat.value < 0 ? stat.col[1] : stat.col[0];
  const width = abs === max ? "100%" : `${(abs / max) * 100}%`;
  const style = {
    width: !stat.value ? "1%" : width,
    backgroundColor: `${color}`,
    boxShadow: isHovered ? `0 8px 8px ${color}` : `0 8px 8px ${color}75`,
  };

  function handleHover(e) {
    e.preventDefault();
    setIsHovered(true);

    onSetItemIndex(index);
    onSetCagr(stat.g3y);
  }

  function handleUnhover() {
    setIsHovered(false);

    onSetItemIndex(null);
    onSetCagr(null);
  }

  return (
    <div
      onMouseOver={(e) => handleHover(e)}
      onMouseOut={handleUnhover}
      style={style}
      className="w-full h-6 rounded-lg"
    ></div>
  );
}

export default BarFinsInner;
