/* eslint-disable react/prop-types */
import CircleReused from "../../../../../../../../ui/circle/CircleReused";
import ValueBar from "../EstimateActual/ValueBar";

function ChartMain({ ideaFin, val, cagr }) {
  return (
    <div
      style={{ gridTemplateColumns: "2fr 1fr" }}
      className="w-full h-[90%] grid grid-cols-2 items-center"
    >
      <div className="w-full h-[70%] flex items-end">
        {ideaFin.map((t, i, arr) => {
          const max = Math.max(...arr.map((tr) => Math.trunc(tr.value)));
          return <ValueBar key={i} t={t} max={max} valuation={val} />;
        })}
      </div>
      <div className="w-full flex flex-col items-center">
        <p className="text-sm italic text-blue-800 font-semibold">
          10-year CAGR (Est)
        </p>
        <CircleReused svgSize={200} strokeWidth={5} num={cagr} sdo={425} />
      </div>
    </div>
  );
}

export default ChartMain;
