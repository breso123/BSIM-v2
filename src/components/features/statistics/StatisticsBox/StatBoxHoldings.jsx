/* eslint-disable react/prop-types */
//import ReusableDonut from "../../../reusableStatComponents/ReusableDonut";

import Box from "../../../../ui/box/Box";
import ReusableDonut from "../items/ReusableDonut";
import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";

function StatBoxHoldings({ pv }) {
  const insiders = pv?.percent_held_by_insiders;
  const institutions = pv?.percent_held_by_institutions;
  const data = [insiders, institutions, 1 - insiders - institutions];
  const colors = ["blue", "midnightblue", "#7c3aed"];
  const legendData = [
    { item: "Insider", color: "bg-blue-800" },
    { item: "Institution", color: "bg-indigo-950" },
    { item: "Other", color: "bg-purple-700" },
  ];

  return (
    <Box type="classic">
      <StatBoxHeader title="Holdings" legend={legendData} colors={colors} />
      <StatBoxMain>{<ReusableDonut data={data} colors={colors} />}</StatBoxMain>
    </Box>
  );
}

export default StatBoxHoldings;
