import { useSelector } from "react-redux";
import HeaderStatistics from "../statistics/HeaderStatistics";
import TechnicalsTable from "./items/TechnicalsTable";

import TechnicalsChart from "./items/TechnicalsChart";
import TechnicalsHeader from "./items/TechnicalsHeader";

function TechnicalsContent() {
  const { oscillators, movingAvgs, timeFrame } = useSelector(
    (state) => state.technicals
  );

  return (
    <div className="h-full w-[65.9rem] border-t-2 border-l-2 border-solid border-blue-950 px-4 relative">
      <HeaderStatistics />
      <div className=" w-full h-[38rem] flex items-center">
        <div className="w-1/2 h-full flex flex-col items-center justify-center">
          <TechnicalsHeader />
          <TechnicalsTable
            oscillators={oscillators}
            movingAvgs={movingAvgs}
            timeFrame={timeFrame}
          />
        </div>
        <TechnicalsChart oscillators={oscillators} movingAvgs={movingAvgs} />
      </div>
    </div>
  );
}

export default TechnicalsContent;
