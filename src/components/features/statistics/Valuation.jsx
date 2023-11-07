import { useSelector } from "react-redux";
import StatBoxMV from "./StatisticsBox/StatBoxMV";
import StatBoxMulti from "./StatisticsBox/StatBoxMulti";
import StatBoxPeg from "./StatisticsBox/StatBoxPeg";

function Valuation() {
  const { valuation: val } = useSelector(
    (state) => state.statistics.statistics
  );
  const logo = useSelector((state) => state.app.logo);

  return (
    <div className="grid grid-cols-2 px-2 items-center justify-items-center gap-y-2">
      <StatBoxMV val={val} />
      <StatBoxMulti val={val} />
      <StatBoxPeg val={val} logo={logo} />
    </div>
  );
}

export default Valuation;
