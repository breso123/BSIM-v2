import { shortFCST } from "../../../../helpers/miscFuncs";

function getFcstBy(type, newIdea) {
  if (["optimistic", "realistic", "pessimistic"].some((t) => type === t))
    return newIdea.forecastBy;
  if (type === "shares") return newIdea.forecastBySh;
  if (type === "multi") return newIdea.forecastByMulti;
  if (type === "ebmg") return newIdea.forecastByEbmg;
  if (type === "dbtEb") return newIdea.forecastByDbtEb;
}

export function getItem(ideasKey, newIdea) {
  if (ideasKey === "discounted_cf") return "fcfl";
  else {
    if (newIdea.multipleVal === "P/E") return "nin";
    if (newIdea.multipleVal === "EV/EBITDA") return "eb";
    else return "sa";
  }
}

export function getVls(type, newIdea) {
  const fcstBy = getFcstBy(type, newIdea);
  return fcstBy === "custom"
    ? newIdea[type].map((t) => +t / 100)
    : Array.from({ length: 9 }, () => +newIdea[`${type}CAGR`] / 100);
}

export function findVals(newIdea, selected, selectedCAGR, type) {
  return getFcstBy(type, newIdea) === "custom"
    ? Object.entries(newIdea)
        .filter((idea) => idea[0].includes(selected))
        .map((idea) => +idea[1] / 100)
    : Array.from({ length: 9 }, () => +newIdea[selectedCAGR] / 100);
}

export function getActualData(stat, item, prices) {
  return stat.income_statement
    ?.map((st, i) => {
      const itm =
        stat[item === "fcfl" ? "cash_flow" : "income_statement"]?.[i][item];

      const main = {
        period: new Date(st.fda).getFullYear(),
        value: st["sa"],
        item: itm,
        margin: itm / st["sa"],
        type: "act",
      };

      if (item === "fcfl") return main;
      else return { ...main, numOfShares: st.bsou, price: prices[i] };
    })
    .reverse();
}

export function finalVals(
  actual,
  item,
  vals,
  newIdea,
  multies,
  nosGR,
  margins,
  dbtEb
) {
  if (!actual) return;
  return [
    ...actual,
    ...shortFCST(actual[actual.length - 1], vals).map((s, i, arr) => {
      const latest = actual[actual.length - 1];
      const period = latest?.period + i + 1;
      const growth =
        i === 0 ? s / actual[actual.length - 1]?.value - 1 : s / arr[i - 1] - 1;

      const standard = {
        period,
        value: s,
        type: "est",
      };

      if (item === "fcfl")
        return {
          ...standard,
          wacc: +newIdea.wacc / 100,
          item: s * margins[i],
          discounted:
            (s * margins[i]) / Math.pow(1 + newIdea.wacc / 100, i + 1),
        };
      else {
        const numOfShares = shortFCST(
          actual[actual.length - 1]?.numOfShares,
          nosGR
        )[i];
        const multi = multies[i] * 100;
        const price = (s / numOfShares) * multi;
        const discountRate = Math.pow(1 + newIdea.costOfEquity / 100, i + 1);
        const standardMulti = {
          growth,
          multi,
          numOfShares,
          costOfEquity: +newIdea.costOfEquity / 100,
        };
        const priceAndFV = {
          price,
          fairVal: price / discountRate,
        };

        if (item === "nin") {
          return {
            ...standard,
            ...standardMulti,
            item: s * margins[i],
            ...priceAndFV,
          };
        }
        if (item === "sa") {
          return {
            ...standard,
            ...standardMulti,
            ...priceAndFV,
          };
        }

        if (item === "eb") {
          const ev = s * multies[i] * 100;
          const eqv = ev - dbtEb[i] * 100 * s + margins[i];
          const price = ev / numOfShares;

          return {
            ...standard,
            ...standardMulti,
            item: s * margins[i],
            ev,
            eqv,
            margin: margins[i],
            debtEbitda: dbtEb[i] * 100,
            debt: dbtEb[i] * s,
            price,
            fairVal: price / discountRate,
          };
        }
      }

      if (item === "shares") return { period, value: s };
    }),
  ];
}
