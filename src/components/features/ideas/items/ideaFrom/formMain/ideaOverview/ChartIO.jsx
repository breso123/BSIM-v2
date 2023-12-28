/* eslint-disable react/prop-types */
import Legend1 from "../../../../../../../ui/reusableLegend/Legend1";
import ScenarioHeader from "../ScenarioHeader";
import ChartMain from "./ChartItems/ChartMain";

function ChartIO({ idea, isConfirmed, cagr, valuation, translate, data }) {
  const transform = { transform: `translate(${translate})` };
  const ideaFin = valuation === "DCF" ? idea.slice(0, -1) : idea;

  return (
    <div
      style={transform}
      className="flex flex-col w-full h-full px-1 relative transition-all duration-300"
    >
      <ScenarioHeader desc="Revenue & Profit" isConfirmed={isConfirmed} />
      <Legend1 data={data} type="leg2" />

      <ChartMain ideaFin={ideaFin} cagr={cagr} val={valuation} />
    </div>
  );
}

export default ChartIO;
