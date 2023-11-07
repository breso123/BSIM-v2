import { useSelector } from "react-redux";
import StatBoxRatio from "./StatisticsBox/StatBoxRatio";
import StatBoxRatioCf from "./StatisticsBox/StatBoxRatioCf";
import StatBoxRatioRt from "./StatisticsBox/StatBoxRatioRt";
import { useRatios } from "./items/useRatios";

function Ratios() {
  const st = useSelector((state) => state.financials.statements);
  const { liquidity, indebtness, returns, cfRatios } = useRatios(st);

  return (
    <div className="grid grid-cols-2 px-2 items-center justify-items-center gap-y-2 overflow-scroll h-[38rem]">
      <StatBoxRatio title="Liquidity" ratios={liquidity} />
      <StatBoxRatio title="Indebtness" ratios={indebtness} />
      <StatBoxRatioRt title="Returns" ratios={returns} />
      <StatBoxRatioCf title="Cash Flow Coverages" ratios={cfRatios} />
    </div>
  );
}

export default Ratios;
