/* eslint-disable react/prop-types */
//import ReusableDonut from "../../../reusableStatComponents/ReusableDonut";

import ReusableDonut from "../items/ReusableDonut";
import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";

function StatBoxHoldings({ pv }) {
  const insiders = pv?.percent_held_by_insiders;
  const institutions = pv?.percent_held_by_institutions;
  const data = [insiders, institutions, 1 - insiders - institutions];
  const colors = ["blue", "midnightblue", "#7c3aed"];

  return (
    <div
      className={`flex flex-col items-center justify-center h-72 w-[95%] mb-2 mt-1 p-2 bg-orange-100/25 relative shadow-statPrice`}
    >
      <StatBoxHeader
        title="Holdings"
        legend={["Insider", "Institution", "Other"]}
        colors={colors}
      />
      <StatBoxMain>{<ReusableDonut data={data} colors={colors} />}</StatBoxMain>
    </div>
  );
}

export default StatBoxHoldings;
