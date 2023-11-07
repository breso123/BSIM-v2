import { useState } from "react";
import StatBoxHeader from "../../statistics/StatisticsBox/StatBoxHeader";
import StatBoxMain from "../../statistics/StatisticsBox/StatBoxMain";
import BarTrend from "../items/BarTrend";
import Revisions from "../items/Revisions";
import { itemStringed } from "../../../../helpers/formatters";

function TrendRevsBox() {
  const [inputEl, setInputEl] = useState("Current Quarter");
  const { trends, revs } = JSON.parse(localStorage.getItem("estimates"));
  const cols = ["#172554", "#0c4a6e", "#042f2e", "#581c87", "#431407"];
  const inputVal = itemStringed(inputEl);
  const periods = [
    "Current",
    "7 days ago",
    "30 days ago",
    "60 days ago",
    "90 days ago",
  ];

  const tgt = trends.find((t) => t.period === inputVal);
  const tgtRev = revs.find((r) => r.period === inputVal);
  const values = [
    tgt.current_estimate,
    tgt["7_days_ago"],
    tgt["30_days_ago"],
    tgt["60_days_ago"],
    tgt["90_days_ago"],
  ];

  const max = Math.max(...values);

  return (
    <div className="flex flex-col items-center justify-center h-72 w-[95%] mb-2 mt-1 p-2 relative bg-orange-100/25 shadow-statPrice">
      <StatBoxHeader
        title="Eps Trends & Revisions"
        inputEl={inputEl}
        input={["Current Quarter", "Next Quarter", "Current Year", "Next Year"]}
        onSetInputEl={setInputEl}
      />
      <StatBoxMain>
        <div className="w-full h-full flex items-center justify-between px-3">
          <div className="flex flex-col w-1/2 gap-1">
            {values?.map((v, i) => (
              <BarTrend
                key={i}
                v={v}
                col={cols[i]}
                period={periods[i]}
                max={max}
              />
            ))}
          </div>
          <Revisions tgtRev={tgtRev} />
        </div>
      </StatBoxMain>
    </div>
  );
}

export default TrendRevsBox;
