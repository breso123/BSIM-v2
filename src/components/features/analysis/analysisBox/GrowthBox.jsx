import { useState } from "react";
import ReusableSVG from "../../../reusableSVG/ReusableSVG";
import StatBoxHeader from "../../statistics/StatisticsBox/StatBoxHeader";
import StatBoxMain from "../../statistics/StatisticsBox/StatBoxMain";
import { itemStringed } from "../../../../helpers/formatters";

function GrowthBox() {
  const [inputEl, setInputEl] = useState("Current Quarter");
  const { growth } = JSON.parse(localStorage.getItem("estimates"));
  const inputVal = itemStringed(inputEl);
  const value = growth[inputVal];

  const sdo = (1 - (value < 0 ? Math.abs(value) : value)) * 577;
  return (
    <div className="flex flex-col items-center justify-center h-72 w-[95%] mb-2 mt-1 p-2 relative bg-orange-100/25 shadow-statPrice">
      <StatBoxHeader
        title="Growth Estimate"
        input={[
          "Current Quarter",
          "Next Quarter",
          "Current Year",
          "Next Year",
          "Past 5 Years PA",
          "Next 5 Years PA",
        ]}
        onSetInputEl={setInputEl}
      />
      <StatBoxMain>
        <ReusableSVG
          percent={value}
          svgSize={275}
          strokeWidth={6}
          strokeDashoffset={sdo}
        />
      </StatBoxMain>
    </div>
  );
}

export default GrowthBox;
