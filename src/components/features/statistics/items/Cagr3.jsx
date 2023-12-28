/* eslint-disable react/prop-types */

import CircleReused from "../../../../ui/circle/CircleReused";

function Cagr3({ cagr }) {
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
        <CircleReused num={cagr} svgSize={130} strokeWidth={6} sdo={275} />
      </div>
    </div>
  );
}

export default Cagr3;
