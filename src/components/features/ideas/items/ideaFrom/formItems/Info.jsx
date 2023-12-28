/* eslint-disable react/prop-types */
import { useState } from "react";
import InfoSVG from "../../../../../../ui/InfoSVG";
import InfoMain from "./infoOpts/InfoMain";

function Info({ val, type, anly = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className="h-8 w-8 flex items-center justify-center rounded-full hover:cursor-pointer relative"
    >
      <InfoSVG />
      {hovered && <InfoMain val={val} type={type} anly={anly} />}
    </div>
  );
}

export default Info;
