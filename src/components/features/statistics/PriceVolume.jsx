import { useSelector } from "react-redux";
import StatBoxHoldings from "./StatisticsBox/StatBoxHoldings";
import StatBoxPrice from "./StatisticsBox/StatBoxPrice";
import StatBoxShares from "./StatisticsBox/StatBoxShares";
import StatBoxVolume from "./StatisticsBox/StatBoxVolume";

function PriceVolume() {
  const { price_and_volume: pv } = useSelector(
    (state) => state.statistics.statistics
  );

  return (
    <div className="grid grid-cols-2 px-2 items-center justify-items-center gap-y-2">
      <StatBoxPrice pv={pv} />
      <StatBoxVolume pv={pv} />
      <StatBoxShares pv={pv} />
      <StatBoxHoldings pv={pv} />
    </div>
  );
}

export default PriceVolume;
