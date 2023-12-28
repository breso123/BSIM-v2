/* eslint-disable react/prop-types */
import { useState } from "react";
import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";
import { itemStringed } from "../../../../helpers/formatters";
import CircleReused from "../../../../ui/circle/CircleReused";
import Box from "../../../../ui/box/Box";

function StatBoxDividends({ pv }) {
  const [inputEl, setInputEl] = useState("Trailing");
  const inputVal = itemStringed(inputEl);
  const check5Y = inputEl.includes("5");
  const yld = pv?.[`${inputVal}${check5Y ? "" : "_annual"}_dividend_yield`];
  const yldFinal = check5Y ? yld / 100 : yld;
  const rate = pv?.[`${inputVal}_annual_dividend_rate`];

  return (
    <Box type="classic">
      <StatBoxHeader
        onSetInputEl={setInputEl}
        inputEl={inputEl}
        input={["Trailing", "Forward", "5 Year Average"]}
        title="Yield"
      />
      <StatBoxMain>
        <CircleReused num={yldFinal} svgSize={275} strokeWidth={6} sdo={577} />
        <p className="absolute top-[80%] left-[5%] text-3xl flex flex-col font-semibold text-blue-950/75 items-center">
          {rate ? rate.toFixed(2) : "-"}
        </p>
      </StatBoxMain>
    </Box>
  );
}

export default StatBoxDividends;
