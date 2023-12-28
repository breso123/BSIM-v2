import { fcfMargin, ocfMargin } from "../options/optionsCF";

import { optsLev } from "../options/optionsLev";

import { revenueGrowth } from "../options/optionsRev";
import { getTotalPts } from "./scorers";
import { cashRatio, currentRatio } from "../options/optionsLQ";
import { netMargin, opMargin, roa, roe } from "../options/optionsProfit";
import { deOpts, laOpts } from "../options/optionsDebtRatios";

export function sumPoints(arr) {
  const points = arr.map((v) => v?.points).reduce((p, acc) => p + acc, 0);
  const max = arr.map((v) => v?.max).reduce((p, acc) => p + acc, 0);

  return { points, max };
}

export function mapPoints(
  arr,
  items,
  timeFrame,
  impObj,
  isCf = false,
  isDbt = false
) {
  return arr.map((el) =>
    getTotalPts(
      items[isCf ? `${el}M` : el],
      items[`${el}Imp`],
      timeFrame,
      el,
      impObj,
      isDbt
    )
  );
}

export function getParItemCol(item) {
  if (item < 0) return "text-red-700";
  else return "text-blue-900";
}

export function getObj(margin) {
  if (margin === "opMg") return opMargin;
  if (margin === "nMg") return netMargin;
  if (margin === "roa") return roa;
  if (margin === "roe") return roe;
  if (margin === "ocfl") return ocfMargin;
  if (margin === "fcfl") return fcfMargin;
  if (margin === "cr") return currentRatio;
  if (margin === "car") return cashRatio;
  if (margin === "revGr") return revenueGrowth;
  if (margin === "las") return laOpts;
  if (margin === "db") return deOpts;
  if (margin === "lev") return optsLev;
}

export function filter100(biScoresCT, scores, isPos = true) {
  const filter = scores.filter((sc) => Math.abs(sc.points) === sc.max);
  const items = filter.map((sc) => sc.category);

  if (scores.length === biScoresCT.length)
    return `All categories recorded ${
      isPos ? "positive" : "negative"
    } BI-score performance ${
      filter.length > 0 &&
      `with ${items.join(" and ")} reaching it's maximum number of points`
    }`;
}

export const titleStrings = {
  total: ["Revenue & Profit", "Liquidity & Cash Flows", "Indebtness"],
  revenue_and_profit: ["Revenue Growth", "Profit Margins", "Efficiency"],
  liquidity_and_cf: ["Liquidity Ratios", "Cash Flows"],
  indebtness: ["Debt Ratios", "Debt Coverage", "Leverage"],
};

export const detailStrings = {
  "Revenue Growth": ["Revenue Growth"],
  "Liquidity Ratios": ["Current Ratio", "Cash Ratio"],
  "Cash Flows": ["Operating Cash Flow", "Free Cash Flow"],
  "Profit Margins": ["Operating Margin", "Net Margin"],
  "Debt Ratios": ["Liabilities/Assets", "Debt/Equity"],
  "Debt Coverage": [
    "Debt coverage",
    "St Debt Coverage",
    "Debt Repayment Coverage",
  ],
  Efficiency: ["Return On Assets", "Return On Equity"],
  Leverage: ["Leverage"],
};
