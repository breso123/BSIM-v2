import { useSelector } from "react-redux";
import StatBoxFins from "./StatisticsBox/StatBoxFins";
import { useStatsFS } from "./items/useStatsFS";

function FinancialStatements() {
  const st = useSelector((state) => state.financials.statements);
  const { isData, bsData, cfData } = useStatsFS(st);

  return (
    <div className="h-[38rem] grid grid-cols-1 items-center justify-items-center overflow-scroll">
      <StatBoxFins fs={isData} title="Income Statement" id={1} />
      <StatBoxFins fs={bsData} title="Balance Sheet" id={2} />
      <StatBoxFins fs={cfData} title="Cash Flow" id={3} />
    </div>
  );
}

export default FinancialStatements;
