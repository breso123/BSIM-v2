/* eslint-disable react/prop-types */
import CircleReused from "../../../../../ui/circle/CircleReused";

function ChartMargin({ margins, gap = "gap-4" }) {
  return (
    <div className={`flex items-center justify-center ${gap} h-[20%] mb-8`}>
      {margins?.map((m, i) => (
        <CircleReused key={i} num={m} sdo={180} strokeWidth={5} svgSize={90} />
      ))}
    </div>
  );
}

export default ChartMargin;
