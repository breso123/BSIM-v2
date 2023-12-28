import Legend1 from "../../../../../ui/reusableLegend/Legend1";

/* eslint-disable react/prop-types */
function LegendHL({ data, title }) {
  return (
    <div
      style={{ boxShadow: "1px 1px 1px midnightblue" }}
      className="h-[3-rem] w-full flex items-center justify-between px-2 border-b border-blue-950 rounded-lg"
    >
      <p className="italic text-blue-900">{title}</p>
      <Legend1 data={data} type="leg1" />
    </div>
  );
}

export default LegendHL;
