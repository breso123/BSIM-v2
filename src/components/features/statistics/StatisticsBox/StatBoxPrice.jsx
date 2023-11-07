/* eslint-disable react/prop-types */
import PriceOverlay from "../items/PriceOverlay";
import PriceRange from "../items/PriceRange";
import StatBoxHeader from "./StatBoxHeader";

import StatBoxMain from "./StatBoxMain";

function StatBoxPrice({ pv }) {
  return (
    <div className="flex flex-col items-center justify-center h-72 w-[95%] mb-2 mt-1 p-2 bg-orange-100/25 relative shadow-statPrice">
      <StatBoxHeader
        subtitle="52 Week Change (%)"
        title="Price Range"
        legend={["50 MA", "200 MA"]}
      />
      <StatBoxMain>
        <div>
          <PriceRange pv={pv} />
        </div>
        <PriceOverlay pv={pv} />
      </StatBoxMain>
    </div>
  );
}

export default StatBoxPrice;
