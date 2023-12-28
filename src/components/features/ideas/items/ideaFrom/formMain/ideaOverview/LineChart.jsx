/* eslint-disable react/prop-types */
import { useState } from "react";
import ScenarioHeader from "../ScenarioHeader";
import LineChartMain from "./ChartItems/LineChartMain";
import {
  getLegendLC,
  getLegendStrLC,
  getValsLC,
} from "../../../../helpers/stringers";
import Legend1 from "../../../../../../../ui/reusableLegend/Legend1";

function LineChart({ values, idea, isConfirmed, translate = null }) {
  const [item, setItem] = useState("value");
  const { valuation } = idea;
  const transform = { transform: `translate(${translate})` };

  function handleChange(e) {
    e.preventDefault();
    setItem(e.target.value);
  }

  const data = {
    item,
    onChange: handleChange,
    vals: getValsLC(valuation),
    names: getLegendLC(valuation),
  };

  return (
    <div
      style={transform}
      className="h-full w-full flex flex-col gap-6 relative transition-all duration-300"
    >
      <ScenarioHeader
        desc="Scenario Overview"
        isConfirmed={isConfirmed}
        data={data}
      />
      <Legend1 type="leg2" data={getLegendStrLC(item)} />

      <LineChartMain item={item} values={values} idea={idea} />
    </div>
  );
}

export default LineChart;
