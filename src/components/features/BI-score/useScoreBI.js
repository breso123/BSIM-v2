import { useSelector } from "react-redux";
import { revImprovement } from "./options/optionsRev";

import { useParams } from "react-router-dom";
import useItemsFS from "./useItemsFS";

import { mapPoints, sumPoints } from "./helpers/others";

import { getTotalPts, totalPtsDC } from "./helpers/scorers";
import { cfMgImp } from "./options/optionsCF";
import { marginImprovement } from "./options/optionsProfit";
import { liqImprovement } from "./options/optionsLQ";
import { drImprovement } from "./options/optionsDebtRatios";
import { levImprovement } from "./options/optionsLev";

function useScoreBI(isSum = false) {
  const { keyBI } = useParams();
  const { timeFrame } = useSelector((state) => state.scorebi);
  const items = useItemsFS();

  const valsRP = [
    getTotalPts(
      items.revGr,
      items.revGrImp,
      timeFrame,
      "revGr",
      revImprovement
    ),
    sumPoints(mapPoints(["opMg", "nMg"], items, timeFrame, marginImprovement)),
    sumPoints(mapPoints(["roa", "roe"], items, timeFrame, marginImprovement)),
  ];

  const valsLCF = [
    sumPoints(mapPoints(["cr", "car"], items, timeFrame, liqImprovement)),
    sumPoints(mapPoints(["ocfl", "fcfl"], items, timeFrame, cfMgImp, true)),
  ];

  const valsDBT = [
    sumPoints(
      mapPoints(["las", "db"], items, timeFrame, drImprovement, false, true)
    ),
    totalPtsDC(items.ocfl, items.dbt, items.std, items.dr, timeFrame),
    getTotalPts(
      items.lev,
      items.levImp,
      timeFrame,
      "lev",
      levImprovement,
      true
    ),
  ];

  if (keyBI === "revenue_and_profit")
    return !isSum ? valsRP : sumPoints(valsRP);

  if (keyBI === "liquidity_and_cf")
    return !isSum ? valsLCF : sumPoints(valsLCF);

  if (keyBI === "indebtness") return !isSum ? valsDBT : sumPoints(valsDBT);
  else
    return !isSum
      ? [sumPoints(valsRP), sumPoints(valsLCF), sumPoints(valsDBT)]
      : sumPoints([...valsLCF, ...valsRP, ...valsDBT]);
}

export default useScoreBI;
