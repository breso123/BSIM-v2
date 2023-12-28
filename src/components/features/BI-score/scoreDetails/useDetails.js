import { useSelector } from "react-redux";
import useItemsFS from "../useItemsFS";
import { detailStrings } from "../helpers/others";
import { useParams } from "react-router-dom";
import {
  getImprovementPts,
  getMarginPoints,
  getPointsDC,
} from "../helpers/scorers";
import {
  dcImprovement,
  stddrCovOpts,
  tdCovOpts,
} from "../options/optionsDebtCov";

import { cfMgImp } from "../options/optionsCF";
import { marginImprovement } from "../options/optionsProfit";
import { levImprovement } from "../options/optionsLev";
import { revImprovement } from "../options/optionsRev";
import { drImprovement } from "../options/optionsDebtRatios";
import { liqImprovement } from "../options/optionsLQ";
import { itemStringed } from "../../../../helpers/formatters";

function useDetails(ts) {
  const items = useItemsFS();
  const { keyBI } = useParams();
  const { timeFrame } = useSelector((state) => state.scorebi);
  if (!ts || keyBI === "total") return;

  function detailsArr1(item, impObj) {
    const chLq = ["cr", "car"].some((str) => str === item);
    const chCf = ["ocfl", "fcfl"].some((str) => str === item);
    const itemCf = ["cr", "car", "db", "lev"].some((str) => str === item);
    const chCrv = ["las", "db", "lev"].some((str) => str === item);
    const finalItem = items[chCf ? `${item}M` : item];
    const impItem = items[`${item}Imp`];

    return [
      getMarginPoints(finalItem, item, timeFrame)?.points,
      (finalItem * (itemCf ? 1 : 100)).toFixed(chLq ? 2 : 1),
      getImprovementPts(impItem, timeFrame, impObj, chCrv)?.points,
      (impItem * 100).toFixed(1),
    ];
  }

  function detailsArr2(dbt, imp, opts, isNeg = false) {
    const dbtItm = isNeg ? -items[dbt] : items[dbt];
    return [
      getPointsDC(items.ocfl, dbtItm, opts)?.points,
      (items.ocfl / dbtItm)?.toFixed(1),
      getImprovementPts(items.ocfl / dbtItm, timeFrame, dcImprovement)?.points,
      items[imp]?.toFixed(1),
    ];
  }

  function details() {
    return {
      current_ratio: detailsArr1("cr", liqImprovement),
      cash_ratio: detailsArr1("car", liqImprovement),
      operating_cash_flow: detailsArr1("ocfl", cfMgImp),
      free_cash_flow: detailsArr1("fcfl", cfMgImp),
      operating_margin: detailsArr1("opMg", marginImprovement),
      net_margin: detailsArr1("nMg", marginImprovement),
      return_on_assets: detailsArr1("roa", marginImprovement),
      return_on_equity: detailsArr1("roe", marginImprovement),
      leverage: detailsArr1("lev", levImprovement),
      revenue_growth: detailsArr1("revGr", revImprovement),
      debt_coverage: detailsArr2("dbt", "tdcImp", tdCovOpts),
      st_debt_coverage: detailsArr2("std", "stdcImp", stddrCovOpts),
      debt_repayment_coverage: detailsArr2("dr", "dcImp", stddrCovOpts, true),
      "liabilities/assets": detailsArr1("las", drImprovement),
      "debt/equity": detailsArr1("db", drImprovement),
    };
  }

  return detailStrings[ts].map((ts) => {
    const detail = details()[itemStringed(ts)];
    return {
      main: {
        item: ts + `${ts === "Cash Flows" ? " (%)" : ""}`,
        points: detail?.[0],
        value: detail?.[1],
        type: "main",
        bord: false,
      },
      perc: {
        item: `${ts === "Revenue Growth" ? "Acceleration" : "Improvement"} (%)`,
        points: detail?.[2],
        value: detail?.[3],
        type: "perc",
        bord: true,
      },
      total: {
        item: "Total BI-points",
        points: detail?.[0] + detail?.[2],
        value: null,
        type: "total",
        bord: false,
      },
    };
  });
}

export default useDetails;
