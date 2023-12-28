import { useState } from "react";
import StatBoxHeader from "../../statistics/StatisticsBox/StatBoxHeader";
import StatBoxMain from "../../statistics/StatisticsBox/StatBoxMain";
import { itemStringed } from "../../../../helpers/formatters";
import CircleReused from "../../../../ui/circle/CircleReused";
import Box from "../../../../ui/box/Box";

function GrowthBox() {
  const [inputEl, setInputEl] = useState("Current Quarter");
  const { growth } = JSON.parse(localStorage.getItem("estimates"));
  const inputVal = itemStringed(inputEl);
  const value = growth[inputVal];

  return (
    <Box type="classic">
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
        <CircleReused num={value} svgSize={275} strokeWidth={6} sdo={577} />
      </StatBoxMain>
    </Box>
  );
}

export default GrowthBox;
