/* eslint-disable react/prop-types */
import Box from "../../../../ui/box/Box";
import StatBarChart from "../items/StatBarChart";
import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";

function StatBoxMV({ val }) {
  const data = [val?.market_capitalization, val?.enterprise_value];
  const max = Math.max(...data);
  const legendData = [
    { item: "Mkt. Capitalization", color: "bg-blue-800" },
    { item: "Enterprise Value", color: "bg-indigo-950" },
  ];

  return (
    <Box type="classic">
      <StatBoxHeader title="Market Value" legend={legendData} />
      <StatBoxMain>
        <StatBarChart data={data} max={max} />
      </StatBoxMain>
    </Box>
  );
}

export default StatBoxMV;
