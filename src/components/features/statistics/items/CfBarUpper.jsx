/* eslint-disable react/prop-types */
import { useState } from "react";

function CfBarUpper({ onSetTgtIndex }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleHover(e) {
    e.preventDefault();
    setIsHovered(true);
    onSetTgtIndex(0);
  }

  function handleOut() {
    setIsHovered(false);
    onSetTgtIndex(null);
  }

  return (
    <div
      onMouseOver={(e) => handleHover(e)}
      onMouseOut={handleOut}
      style={{ boxShadow: isHovered ? "inset 0 0 10px lightblue" : "" }}
      className="h-1/2 w-full bg-blue-950 rounded-md"
    ></div>
  );
}

export default CfBarUpper;
