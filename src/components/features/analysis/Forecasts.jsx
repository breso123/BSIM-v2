import ForecastBox from "./analysisBox/ForecastBox";
import GrowthBox from "./analysisBox/GrowthBox";
import TrendRevsBox from "./analysisBox/TrendRevsBox";

function Forecasts() {
  return (
    <div className="grid grid-cols-2 px-2 items-center justify-items-center gap-y-2 h-[38rem] overflow-scroll">
      <ForecastBox />
      <TrendRevsBox />
      <GrowthBox />
    </div>
  );
}

export default Forecasts;
