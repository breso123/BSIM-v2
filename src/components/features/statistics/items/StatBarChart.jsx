/* eslint-disable react/prop-types */
import { formatNumOfShares } from "../../../../helpers/formatters";
import ChartBackground from "../../general/highlights/items/ChartBackground";
import StatBar from "./StatBar";

function StatBarChart({ data, max }) {
  return (
    <div className="w-[70%] h-[60%] flex items-end justify-center gap-2 relative">
      {data?.map((d, i) => (
        <StatBar key={i} index={i} d={d} max={max} />
      ))}
      <ChartBackground revenue={formatNumOfShares(max, false)} bn={false} />
    </div>
  );
}

export default StatBarChart;
