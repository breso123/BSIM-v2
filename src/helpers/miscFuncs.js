import { kwsBS, kwsCF, kwsFR, kwsIS, kwsPS } from "../keywords/kwsFINS";
import {
  gridderAdditionalBottom,
  gridderBolded,
  gridderMarginTop,
  gridderBottomBorder,
  gridderColored,
  gridderFontWeighted,
  gridderIndicator,
  gridderPercentage,
} from "../keywords/kwsForClasses";

export const calcGrowth = (a, aPl) =>
  [a, aPl].some((a) => a === null) ? null : a / aPl - 1;

export const calcMargin = (a, b) =>
  [a, b].some((a) => a === null) ? null : a / b;

export const cfFilter = (arr, flow) =>
  arr
    .filter((a) => (flow === "i" ? a > 0 : a < 0))
    .reduce((a, acc) => a + acc, 0);

const filterQ = (arr, months) => {
  return arr.filter((_, i) => months.some((m) => m === i));
};

export const Quarters = (arr) => {
  const q1 = filterQ(arr, [arr.length - 1, arr.length - 2, arr.length - 3]);
  const q2 = filterQ(arr, [arr.length - 4, arr.length - 5, arr.length - 6]);
  const q3 = filterQ(arr, [arr.length - 7, arr.length - 8, arr.length - 9]);
  const q4 = filterQ(arr, [arr.length - 10, arr.length - 11, arr.length - 12]);

  return { q1, q2, q3, q4 };
};

export const gridderClassListFS = (kw) => {
  if (!kw || kw === "title") return "gridderRatioHeader";
  if (kw === "sa") return "gridderRevenue";
  if (kw === "ita") return "taxInd";
  if (kw === "taxR") return "taxMar";

  if (gridderBolded.some((k) => k === kw)) return "gridderBolded";
  if (gridderColored.some((k) => k === kw)) return "gridderColored";
  if (gridderIndicator.some((k) => k === kw)) return "gridderIndicator";
  if (gridderPercentage.some((k) => k === kw)) return "gridderPercentage";
  if (gridderMarginTop.some((k) => k === kw)) return "gridderBorderTop";
  if (gridderBottomBorder.some((k) => k === kw)) return "gridderBottomBorder";
  if (gridderFontWeighted.some((k) => k === kw)) return "gridderFontWeighted";
  if (gridderAdditionalBottom.some((k) => k === kw))
    return "gridderAdditionalBottom";
  else return "";
};

export function getKeywords(statement) {
  if (statement === "income_statement") return kwsIS;
  if (statement === "balance_sheet") return kwsBS;
  if (statement === "cash_flow") return kwsCF;
  if (statement === "financial_ratios") return kwsFR;
  if (statement === "piotroski_score") return kwsPS;
}

export const setValuationTick = (val, opts) => {
  if (!val || val === 0) return -90;
  if (val >= opts[opts.length - 1]) return 90;
  else return -90 + val * (185 / opts[opts.length - 1]);
};

export const setMultipleRating = (m, arrCr) => {
  const multipleOpts = [
    { val: "Undervalued", col: "#1e3a8a" },
    { val: "Low", col: "#1d4ed8" },
    { val: "Medium", col: "#4338ca" },
    { val: "High", col: "#7e22ce" },
    { val: "Very High", col: "#c026d3" },
    { val: "Unacceptable", col: "#9f1239" },
  ];

  return arrCr
    .map((el, i, ar) => {
      if (
        m >= (i === 0 ? 0 : ar[i - 1]) &&
        (i === ar.length - 1 ? true : m < el)
      )
        return multipleOpts[i];
    })
    .find((el) => el !== undefined);
};

export const setPegPosition = (peg) => {
  if (!peg || peg === 0) return 0;
  if (peg > 0 || peg < 5) return (peg / 5) * 100;
  if (peg >= 5) return 100;
};

export const determineLBG = (arr, el) => {
  if (arr.length === 1 && +arr[0] === 20000) return el < 20000;
  if (arr.length === 1 && +arr[0] === 200000) return el > 200000;
  else return el > arr[0] && el < arr[1];
};

export const checkDateInRanges = (inputDate, inputVal) => {
  const now = new Date();
  const time = new Date(inputDate).getTime();
  const dateRanges = {
    "last-30-days": new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000),
    "last-3-months": new Date(now.getTime() - 3 * 30 * 24 * 60 * 60 * 1000),
    "last-6-months": new Date(now.getTime() - 6 * 30 * 24 * 60 * 60 * 1000),
    "last-12-months": new Date(now.getTime() - 12 * 30 * 24 * 60 * 60 * 1000),
    "last-2-years": new Date(now.getTime() - 2 * 365 * 24 * 60 * 60 * 1000),
  };

  return time >= dateRanges[inputVal].getTime() && time <= now.getTime();
};

export const fcst10Y = (latest, growthRates, tg, wacc) => {
  const checkNum = typeof growthRates === "number";
  const p1 = latest.value * (1 + checkNum ? growthRates : growthRates[0]);
  const p2 = p1 * (1 + checkNum ? growthRates : growthRates[1]);
  const p3 = p2 * (1 + checkNum ? growthRates : growthRates[2]);
  const p4 = p3 * (1 + checkNum ? growthRates : growthRates[3]);
  const p5 = p4 * (1 + checkNum ? growthRates : growthRates[4]);
  const p6 = p5 * (1 + checkNum ? growthRates : growthRates[5]);
  const p7 = p6 * (1 + checkNum ? growthRates : growthRates[6]);
  const p8 = p7 * (1 + checkNum ? growthRates : growthRates[7]);
  const p9 = p8 * (1 + checkNum ? growthRates : growthRates[8]);
  const tva = (p9 * (1 + tg)) / (wacc - tg);

  return [p1, p2, p3, p4, p5, p6, p7, p8, p9, tva].map((p, i) => {
    return {
      period: latest.period + i + 1,
      value: p,
      wacc,
      discounted: p / Math.pow(1 + wacc, i + 1),
    };
  });
};

export const shortFCST = (latest, growthRates) => {
  const p1 = latest.value * (1 + growthRates[0]);
  const p2 = p1 * (1 + growthRates[1]);
  const p3 = p2 * (1 + growthRates[2]);
  const p4 = p3 * (1 + growthRates[3]);
  const p5 = p4 * (1 + growthRates[4]);
  const p6 = p5 * (1 + growthRates[5]);
  const p7 = p6 * (1 + growthRates[6]);
  const p8 = p7 * (1 + growthRates[7]);
  const p9 = p8 * (1 + growthRates[8]);

  return [p1, p2, p3, p4, p5, p6, p7, p8, p9];
};

export const dcfSum = (values) =>
  values.map((val) => val.value).reduce((v, acc) => v + acc, 0);

export const setFcstIdeas = (arr, actual) => {
  return arr.map((p, i) => {
    return {
      period: actual?.[actual.length - 1].period + i + 1,
      value: p,
      type: "fcst",
    };
  });
};

export const determineAction = (string, value, price) => {
  const buy = { action: "Buy", col: "text-blue-800" };
  const sell = { action: "Sell", col: "text-orange-800" };
  const neutral = { action: "Neutral", col: "text-stone-800" };

  if (string === "relative_strength_index") {
    if (+value < 30) return buy;
    if (+value > 70) return sell;
    else return neutral;
  } else {
    if (+value < price) return buy;
    if (+value > price) return sell;
    else return neutral;
  }
};

export const determineOscillatorAction = (obj, key) => {
  const buy = { action: "Buy", col: "text-blue-800" };
  const sell = { action: "Sell", col: "text-orange-800" };
  const neutral = { action: "Neutral", col: "text-stone-800" };

  if (key === "relative_strength_index") {
    const value = +obj.rsi;
    if (value < 30) return { ...buy, value };
    if (value > 70) return { ...sell, value };
    else return { ...neutral, value };
  }

  if (key === "stochastic_oscillator") {
    const value = +obj.slow_k;
    if (value > 80 && +obj.slow_d < value) return { ...buy, value };
    if (value < 20 && +obj.slow_d > value) return { ...sell, value };
    else return { ...neutral, value };
  }

  if (key === "macd") {
    const value = +obj.macd;
    if (value > obj.macd_signal) return { ...buy, value };
    if (value < obj.macd_signal) return { ...sell, value };
    else return { ...neutral, value };
  }
};
