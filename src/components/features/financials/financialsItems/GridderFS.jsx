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
import GridderPeriod from "../../../../ui/gridders/GridderPeriod";
import GridderVals from "../../../../ui/gridders/GridderVals";
import GridderLeft from "../../../../ui/gridders/GridderLeft";
import GridderRight from "../../../../ui/gridders/GridderRight";

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
        <GridderPeriod periods={periods} type="fins" />
        <div className="h-[36rem] overflow-scroll w-full">
          {keywords.map((kw, i) => (
            <GridderVals
              key={i}
              additional={setClassList(kw)}
              type="fins"
              gtc="1fr 2fr"
            >
              <GridderLeft type="fins">
                <span>{kw[0]}</span>
                {kwsWithChart.some((k) => k === kw[1]) && (
                  <FinChart keyword={kw[1]} />
                )}
              </GridderLeft>
              <GridderRight
                cols="9"
                type="fins"
                additional={!kw || kw[1] === "title" ? "opacity-0" : ""}
              >
                <GridderContent statements={statements} keyword={kw} />
              </GridderRight>
            </GridderVals>
          ))}
        </div>
      </div>
      <ChartFS statements={statements} keywords={keywords} />
    </div>
  );
}

export default GridderFS;
