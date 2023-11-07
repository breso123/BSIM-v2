/* eslint-disable react/prop-types */
import ReusableSVG from "../../../reusableSVG/ReusableSVG";

function IdeaCirc({ cagr, fcstString }) {
  const sdo = (1 - (cagr < 0 ? Math.abs(cagr) : cagr)) * 320;
  return (
    <div className="w-1/3 h-full flex flex-col items-center justify-center">
      <p className="text-sm italic text-blue-950">CAGR {fcstString}</p>
      <ReusableSVG
        svgSize={150}
        strokeWidth={5}
        percent={cagr}
        strokeDashoffset={sdo}
      />
    </div>
  );
}

export default IdeaCirc;
