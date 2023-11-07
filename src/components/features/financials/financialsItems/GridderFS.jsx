import { kwsWithChart } from "../../../../keywords/kwsMiscellanious";
import GridderContent from "./GridderContent";
import FinChart from "../../../icons/FinChart";
import { gridderClassListFS } from "../../../../helpers/miscFuncs";
import { periods } from "./HeaderFins";
import ChartFS from "./ChartFS";
import { useParams } from "react-router-dom";
import * as kw from "../../../../keywords/kwsFINS";
import { fkStringed } from "../../../../helpers/formatters";
import { useSelector } from "react-redux";
import HeaderStatistics from "../../statistics/HeaderStatistics";

/* eslint-disable react/prop-types */
function GridderFS() {
  const { financialsKey } = useParams();
  const statements = useSelector((state) => state.financials.statements);
  const keywords = kw[`kws${fkStringed(financialsKey)}`];
  const additionalStyle = {
    gridderBolded:
      "h-8 mt-3 mb-1 rounded-lg border-t-2 border-b-2 border-blue-950 border-solid shadow-watchList font-semibold text-blue-950 text-sm drop-shadow-gridderBld",
    gridderColored:
      "h-8 rounded-2xl bg-blue-950 mb-4 mt-2 text-sky-100 font-semibold text-sm hover:shadow-hoverFins2 hover:text-sky-300",
    gridderIndicator: " text-indigo-900 font-semibold drop-shadow-gridderInd",
    gridderPercentage: "italic mb-2 text-indigo-800 text-sm tracking-wider",
    gridderMarginTop: "mt-1",
    gridderBottomBorder:
      "border-b-2 border-solid border-blue-950 rounded-2xl mb-2",
    gridderFontWeighted: " mb-3 text-blue-950 font-semibold",
    gridderAdditionalBottom: "mb-1",
    gridderRatioHeader: "text-indigo-900 font-semibold mt-4 mb-2",
    gridderRevenue:
      " rounded-2xl font-semibold text-violet-800 mb-1 text-[15px] h-[35px]",
  };

  function setClassList(kw) {
    return additionalStyle[gridderClassListFS(kw[1])];
  }

  return (
    <div className="w-full border-t-2 border-l-2 border-solid border-blue-950 px-4 relative">
      <HeaderStatistics />
      <div className="h-[39rem] flex flex-col items-center justify-center w-full">
        <div
          style={{ gridTemplateColumns: "1fr 2fr" }}
          className="h-[3rem] px-3 grid grid-cols-2 w-[99%] bg-indigo-900 items-center rounded-2xl text-sky-200/75 font-semibold mb-4 shadow-hoverFins2 font-mono"
        >
          <p className="pl-6">USD in millions</p>
          <div className="grid grid-cols-9">
            {periods.map((p, i) => (
              <p className="text-center text-sm" key={i}>
                {p}
              </p>
            ))}
          </div>
        </div>
        <div className="h-[36rem] overflow-scroll w-full">
          {keywords.map((kw, i) => {
            return (
              <div
                style={{ gridTemplateColumns: "1fr 2fr" }}
                className={`text-[13.5px] px-1 rounded-2xl grid grid-cols-2 w-[99%] h-7 items-center hover:shadow-hoverFins hover:font-bold hover:italic ${setClassList(
                  kw
                )}`}
                key={i}
              >
                <div className="px-3">
                  <p className="text-md tracking-wide flex items-center justify-between gap-3 relative">
                    <span>{kw[0]}</span>
                    {kwsWithChart.some((k) => k === kw[1]) && (
                      <FinChart keyword={kw[1]} />
                    )}
                  </p>
                </div>
                <div
                  className={`grid grid-cols-9 text-center ${
                    !kw || kw[1] === "title" ? "opacity-0" : ""
                  }`}
                >
                  {<GridderContent statements={statements} keyword={kw} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ChartFS statements={statements} keywords={keywords} />
    </div>
  );
}

export default GridderFS;
