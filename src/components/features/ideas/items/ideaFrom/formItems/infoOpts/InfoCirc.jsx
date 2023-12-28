import ReusableSVG from "../../../../../../reusableSVG/ReusableSVG";

/* eslint-disable react/prop-types */
function InfoCirc({ cagr, revenue, type }) {
  const sdo = (1 - (cagr < 0 ? Math.abs(cagr) : cagr)) * 205;
  return (
    <div className="w-[20%] flex flex-col items-center justify-center">
      <p className="text-xs italic text-indigo-800">
        {!type ? "CAGR" : "Margin"} {revenue.length}Y
      </p>
      <ReusableSVG
        percent={cagr}
        svgSize={100}
        strokeWidth={4}
        strokeDashoffset={sdo}
      />
    </div>
  );
}

export default InfoCirc;
