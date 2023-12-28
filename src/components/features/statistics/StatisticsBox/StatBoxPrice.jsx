/* eslint-disable react/prop-types */
import Box from "../../../../ui/box/Box";
import PriceOverlay from "../items/PriceOverlay";
import PriceRange from "../items/PriceRange";
import StatBoxHeader from "./StatBoxHeader";

import StatBoxMain from "./StatBoxMain";

function StatBoxPrice({ pv }) {
  const legendData = [
    { item: "50 MA", color: "bg-blue-950" },
    { item: "200 MA", color: "bg-indigo-700" },
  ];

  return (
    <Box type="classic">
      <StatBoxHeader
        subtitle="52 Week Change (%)"
        title="Price Range"
        legend={legendData}
      />
      <StatBoxMain>
        <div>
          <PriceRange pv={pv} />
        </div>
        <PriceOverlay pv={pv} />
      </StatBoxMain>
    </Box>
  );
}

export default StatBoxPrice;
