/* eslint-disable react/prop-types */

import Box from "../../../../ui/box/Box";
import StatBarChart from "../items/StatBarChart";
import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";

function StatBoxVolume({ pv }) {
  const data = [pv?.avg_10_volume, pv?.avg_30_volume];
  const max = Math.max(...data);
  const legendData = [
    { item: "10 Day", color: "bg-blue-900" },
    { item: "30 Day", color: "bg-indigo-700" },
  ];

  return (
    <Box type="classic">
      <StatBoxHeader title="Volume" legend={legendData} />
      <StatBoxMain>
        <StatBarChart data={data} max={max} />
      </StatBoxMain>
    </Box>
  );
}

export default StatBoxVolume;
