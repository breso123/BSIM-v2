/* eslint-disable react/prop-types */
import { useState } from "react";
import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";
import ReusableSVG from "../../../reusableSVG/ReusableSVG";
import { itemStringed } from "../../../../helpers/formatters";

function StatBoxDividends({ pv }) {
  //const { dividends: pv } = JSON.parse(localStorage.getItem("statistics"));
  const [inputEl, setInputEl] = useState("Trailing");
  const inputVal = itemStringed(inputEl);
  const check5Y = inputEl.includes("5");
  const yld = pv?.[`${inputVal}${check5Y ? "" : "_annual"}_dividend_yield`];
  const yldFinal = check5Y ? yld / 100 : yld;
  const rate = pv?.[`${inputVal}_annual_dividend_rate`];
  const sdo = (1 - (yldFinal < 0 ? Math.abs(yldFinal) : yldFinal * 10)) * 577;

  return (
    <div className="flex flex-col items-center justify-center h-72 w-[95%] mb-2 mt-1 p-2 bg-indigo-200/25 relative shadow-statPrice">
      <StatBoxHeader
        onSetInputEl={setInputEl}
        inputEl={inputEl}
        input={["Trailing", "Forward", "5 Year Average"]}
        title="Yield"
      />
      <StatBoxMain>
        <ReusableSVG
          svgSize={275}
          strokeWidth={6}
          percent={yldFinal}
          strokeDashoffset={sdo}
        />
        <p className="absolute top-[80%] left-[5%] text-3xl flex flex-col font-semibold text-blue-950/75 items-center">
          {rate ? rate.toFixed(2) : "-"}
        </p>
      </StatBoxMain>
    </div>
  );
}

export default StatBoxDividends;
