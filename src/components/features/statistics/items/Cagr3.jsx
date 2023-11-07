/* eslint-disable react/prop-types */

import ReusableSVG from "../../../reusableSVG/ReusableSVG";

function Cagr3({ sdo, cagr }) {
  const opacity = { opacity: cagr !== null ? "1" : "0.2" };
  return (
    <div className="w-full h-[10%] flex items-center justify-start ml-10 mt-2">
      <span className="text-md w-1/2 font-semibold text-blue-950/75">
        3Y CAGR (%)
      </span>
      <div
        style={opacity}
        className="grow w-1/2 flex items-center justify-center translate-x-[-10%]"
      >
        <ReusableSVG
          percent={cagr}
          strokeWidth={6}
          svgSize={130}
          strokeDashoffset={sdo}
        />
      </div>
    </div>
  );
}

export default Cagr3;
