/* eslint-disable react/prop-types */
import { useState } from "react";

import StatBoxHeader from "../../statistics/StatisticsBox/StatBoxHeader";
import StatBoxMain from "../../statistics/StatisticsBox/StatBoxMain";
import ChartFCST from "../items/ChartFCST";
import { itemStringed } from "../../../../helpers/formatters";
import { useSelector } from "react-redux";

function ForecastBox({ max }) {
  const [inputEl, setInputEl] = useState("Current Quarter");
  const { epsEst, revEst } = useSelector((state) => state.analysis.estimates);
  const inputVal = itemStringed(inputEl);
  const dataEps = epsEst?.find((el) => el.period === inputVal);
  const dataRev = revEst?.find((el) => el.period === inputVal);
  const cols = ["#172554", "#0c4a6e", "#042f2e", "#581c87"];

  function findValues(arr) {
    return [
      arr?.avg_estimate,
      arr?.low_estimate,
      arr?.high_estimate,
      arr?.[`year_ago_${arr === dataEps ? "eps" : "sales"}`],
    ];
  }

  return (
    <div className="flex flex-col items-center justify-center h-96 w-full mb-2 mt-1 p-2  relative col-span-2 bg-orange-100/25 shadow-statPrice">
      <StatBoxHeader
        title="Earnings/Revenue"
        inputEl={inputEl}
        input={["Current Quarter", "Next Quarter", "Current Year", "Next Year"]}
        onSetInputEl={setInputEl}
        legend={["Average", "Low Estimate", "High Estimate", "Year Ago"]}
        colors={cols}
      />
      <StatBoxMain>
        <div className="w-full h-full flex items-center divide-x divide-blue-950/50 py-8">
          <ChartFCST
            data={findValues(dataEps)}
            max={max}
            period="Earnings"
            cols={cols}
            analysts={dataEps?.number_of_analysts}
          />
          <ChartFCST
            data={findValues(dataRev)}
            max={max}
            period="Revenue"
            isFormated={true}
            valueFormated={false}
            cols={cols}
            analysts={dataRev?.number_of_analysts}
          />
        </div>
        <p className="absolute top-[0%] text-sm font-mono font-semibold text-indigo-950/80">
          Period: {dataEps?.date.replaceAll("-", "/")}
        </p>
      </StatBoxMain>
    </div>
  );
}

export default ForecastBox;
