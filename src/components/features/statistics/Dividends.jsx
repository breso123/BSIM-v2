import { useSelector } from "react-redux";
import StatBoxCalendar from "./StatisticsBox/StatBoxCalendar";
import StatBoxDividends from "./StatisticsBox/StatBoxDividends";
import StatBoxPayout from "./StatisticsBox/StatBoxPayout";

function Dividends() {
  const { dividends: pv, eps } = useSelector(
    (state) => state.statistics.statistics
  );

  return (
    <div className="grid grid-cols-2 px-2 items-center justify-items-center gap-y-2">
      <StatBoxDividends pv={pv} />
      <StatBoxCalendar pv={pv} />
      <StatBoxPayout pv={pv} eps={eps} />
    </div>
  );
}

export default Dividends;
