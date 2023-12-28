import { useSelector } from "react-redux";

import {
  findCOE,
  fvDCF,
  fvEM,
  reduceVals,
} from "../../../../helpers/hSensitivity";
import { findRangeGR, findRangeVals } from "../../../../helpers/newIdeaMisc";

function useSensitivity(idea, isConfirmed, rangeVal, per) {
  const { statements } = useSelector((state) => state.financials);
  const { scenario } = useSelector((state) => state.ideas);
  const { selectedIdea } = useSelector((state) => state.newIdea);
  const { income_statement, balance_sheet } = statements;
  const { caceq, ostin, ltiN, dbtT, min } = balance_sheet[0];
  const { bsou } = income_statement[0];
  const {
    valuation: val,
    optimistic,
    realistic,
    pessimistic,
    historical,
    wacc,
    tg,
  } = idea;

  const tgtIdea = isConfirmed ? scenario : selectedIdea;
  const sum = caceq + ostin + ltiN - dbtT - min;
  const latest = historical[historical.length - 1];
  const valuesAtPeriod = idea[tgtIdea].values.find((val) => val.period === per);
  const valIndex = idea[tgtIdea].values.indexOf(valuesAtPeriod);
  const cd = val === "DCF";
  const avgMargin = reduceVals(idea, "item") / reduceVals(idea, "value");
  const yAxis = findRangeGR(
    cd ? idea[tgtIdea].cagr : valuesAtPeriod.multi,
    rangeVal
  );

  const xAxis = findCOE(cd ? wacc : valuesAtPeriod.costOfEquity);
  const finalVals = {
    optimistic: findRangeVals(optimistic.cagr, latest, rangeVal),
    realistic: findRangeVals(realistic.cagr, latest, rangeVal),
    pessimistic: findRangeVals(pessimistic.cagr, latest, rangeVal),
  };

  const allVals = xAxis.map((coe) => {
    if (cd) return fvDCF(finalVals[tgtIdea], coe, avgMargin, tg, sum, bsou);
    else {
      const { value, margin, numOfShares, debtEbitda } = valuesAtPeriod;
      return fvEM(
        value,
        coe,
        margin,
        yAxis,
        numOfShares,
        valIndex,
        val,
        debtEbitda
      );
    }
  });

  return { allVals, coe: xAxis, gr: yAxis };
}

export default useSensitivity;
