/* eslint-disable react/prop-types */
import { useState } from "react";

import StatBoxHeader from "../../statistics/StatisticsBox/StatBoxHeader";
import StatBoxMain from "../../statistics/StatisticsBox/StatBoxMain";
import ChartFCST from "../items/ChartFCST";
import { itemStringed } from "../../../../helpers/formatters";
import { useSelector } from "react-redux";
import Box from "../../../../ui/box/Box";

function ForecastBox({ max }) {
  const [inputEl, setInputEl] = useState("Current Quarter");
  const { epsEst, revEst } = useSelector((state) => state.analysis.estimates);
  const inputVal = itemStringed(inputEl);
  const dataEps = epsEst?.find((el) => el.period === inputVal);
  const dataRev = revEst?.find((el) => el.period === inputVal);
  const cols = ["#172554", "#0c4a6e", "#042f2e", "#581c87"];
  const legendData = [
    { item: "Average", color: "bg-blue-900" },
    { item: "Low Estimate", color: "bg-sky-800" },
    { item: "High Estimate", color: "bg-emerald-950" },
    { item: "Year Ago", color: "bg-purple-700" },
  ];

  function findValues(arr) {
    return [
      arr?.avg_estimate,
      arr?.low_estimate,
      arr?.high_estimate,
      arr?.[`year_ago_${arr === dataEps ? "eps" : "sales"}`],
    ];
  }

  return (
    <Box type="fcst">
      <StatBoxHeader
        title="Earnings/Revenue"
        inputEl={inputEl}
        input={["Current Quarter", "Next Quarter", "Current Year", "Next Year"]}
        onSetInputEl={setInputEl}
        legend={legendData}
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
    </Box>
  );
}

export default ForecastBox;
