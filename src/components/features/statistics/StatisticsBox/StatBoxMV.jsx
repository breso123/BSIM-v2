/* eslint-disable react/prop-types */
import StatBarChart from "../items/StatBarChart";
import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";

function StatBoxMV({ val }) {
  const data = [val?.market_capitalization, val?.enterprise_value];
  const max = Math.max(...data);

  return (
    <div className="flex flex-col items-center justify-center h-72 w-[95%] mb-2 mt-1 p-2 bg-orange-100/25 relative shadow-statPrice">
      <StatBoxHeader
        title="Market Value"
        legend={["Mkt. Capitalization", "Enterprise Value"]}
      />
      <StatBoxMain>
        <StatBarChart data={data} max={max} />
      </StatBoxMain>
    </div>
  );
}

export default StatBoxMV;
