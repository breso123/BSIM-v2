/* eslint-disable react/prop-types */
import CircleReused from "../../../../ui/circle/CircleReused";

function ChartReturnCAGR({ monthCagr }) {
  return (
    <div className="h-full w-[30%] flex flex-col items-center justify-center">
      <p className="text-blue-900 font-sans font-semibold italic">
        Average monthly return (%)
      </p>
      <CircleReused num={monthCagr} svgSize={250} strokeWidth={5} sdo={520} />
    </div>
  );
}

export default ChartReturnCAGR;
