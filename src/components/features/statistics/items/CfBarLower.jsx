import { useState } from "react";

/* eslint-disable react/prop-types */
function CfBarLower({ d, total, index, col, onSetTgtIndex }) {
  const [isHovered, setIsHovered] = useState(false);
  const style = {
    width: !d.value ? "0" : `${(d.value / total) * 100}%`,
    boxShadow: isHovered ? `inset 0 0 10px white` : "",
  };

  function handleHover(e) {
    e.preventDefault();
    setIsHovered(true);
    onSetTgtIndex(index + 1);
  }

  function handleOut() {
    setIsHovered(false);
    onSetTgtIndex(null);
  }

  return (
    <div
      onMouseOver={(e) => handleHover(e)}
      onMouseOut={handleOut}
      style={style}
      className={`h-full ${col} rounded-md`}
    ></div>
  );
}

export default CfBarLower;
