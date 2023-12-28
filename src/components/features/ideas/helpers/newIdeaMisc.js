import { shortFCST } from "../../../../helpers/miscFuncs";

export function getFcstBy(chSC, type, newIdea) {
  if (chSC) return newIdea.forecastBy;
  if (type === "shares") return newIdea.forecastBySh;
  if (type === "multi") return newIdea.forecastByMulti;
  if (type === "ebmg") return newIdea.forecastByEbmg;
  if (type === "dbtEb") return newIdea.forecastByDbtEb;
}

export function findGR(arr) {
  return arr.map((el, i, arry) => el / arry[i + 1] - 1 || null);
}

export function findMG(arr, statements) {
  return arr.map((el, i) => el / statements.income_statement[i].sa);
}

export function getItemStr(val) {
  if (val === "DCF") return "fcfl";
  if (val === "P/E") return "nin";
  if (val === "EV/EBITDA") return "eb";
}

export function getItem(statements, val) {
  return statements[val === "DCF" ? "cash_flow" : "income_statement"].map(
    (st) => st[getItemStr(val)]
  );
}

export function findMarginWA(statements, revenue, val) {
  const item = getItem(statements, val);
  const totalProfit = item.reduce((ar, acc) => ar + acc, 0);
  const totalRev = revenue.reduce((ar, acc) => ar + acc, 0);

  return totalProfit / totalRev;
}

export function findCAGR(arr) {
  return Math.pow(arr[0] / arr[arr.length - 1], 1 / arr.length) - 1;
}

export function mapToVals(arr, item) {
  return arr.map((ar) => ar[item]);
}

export function mapToPers(arr) {
  return arr.map((ar) => ar.period);
}

export function getLineData(item, arr, vals) {
  if (item !== "fairVal")
    return [
      ...mapToVals(vals, item),
      ...mapToVals(arr.values.slice(0, -1), item),
    ];
  else return mapToVals(arr.values.slice(0, -1), item);
}

export function isReleased(itm, arr, statements, val) {
  return arr.map((tg) => {
    const actualDates = statements[
      val === "DCF" ? "cash_flow" : "income_statement"
    ].map((st) => new Date(st.fda).getFullYear());

    if (actualDates.includes(tg.period)) return tg[itm];
    else return null;
  });
}

export function findRangeGR(gr, rangeVal) {
  return [
    gr - rangeVal * gr,
    gr - (rangeVal / 2) * gr,
    gr,
    gr + (rangeVal / 2) * gr,
    gr + rangeVal * gr,
  ];
}

export function findRangeVals(arr, latest, rangeVal) {
  return findRangeGR(arr, rangeVal).map((gr) =>
    shortFCST(
      latest,
      Array.from({ length: 9 }, () => gr)
    )
  );
}

function dcfSummation(arr) {
  return arr.map((el) => el.discounted).reduce((el, arr) => el + arr, 0);
}

export function setScenarioObj(sc, state, action) {
  const arrLast = action.payload.key === "discounted_cf" ? 2 : 1;
  const val = state[sc][state[sc].length - arrLast].value;

  if (action.payload.key === "discounted_cf")
    return {
      dcfSum: dcfSummation(state[sc]),
      cagr: Math.pow(val / action.payload.latest, 1 / 9) - 1,
      ivps:
        (dcfSummation(state[sc]) + action.payload.sum) / action.payload.shares,
      values: state[sc],
    };
  else
    return {
      cagr: Math.pow(val / action.payload.latest, 1 / 9) - 1,
      values: state[sc],
    };
}

export function getTgtScenarioPers(scenario, val) {
  return val === "DCF" ? scenario.values.slice(0, -1) : scenario.values;
}
