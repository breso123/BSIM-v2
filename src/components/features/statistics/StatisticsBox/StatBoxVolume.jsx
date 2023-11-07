/* eslint-disable react/prop-types */

import StatBarChart from "../items/StatBarChart";
import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";

function StatBoxVolume({ pv }) {
  const data = [pv?.avg_10_volume, pv?.avg_30_volume];
  const max = Math.max(...data);

  return (
    <div className="flex flex-col items-center justify-center h-72 w-[95%] mb-2 mt-1 p-2 bg-indigo-200/25 relative shadow-statPrice">
      <StatBoxHeader title="Volume" legend={["10 day", "30 day"]} />
      <StatBoxMain>
        <StatBarChart data={data} max={max} />
      </StatBoxMain>
    </div>
  );
}

export default StatBoxVolume;
