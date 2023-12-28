import { formatInterface2 } from "../../../../helpers/formatters";

export function getItem(valuation) {
  if (valuation === "DCF") return "Free CF";
  if (valuation === "P/E") return "Net Income";
  if (valuation === "EV/EBITDA") return "EBITDA";
}

export function tableData(chIK, valuation) {
  return [
    [
      "value",
      "Revenue",
      (period) =>
        formatInterface2(
          Math.trunc(period.value),
          String(Math.trunc(period.value)).length === 13
        ),
    ],
    [
      "diffR",
      "Surprise (%) - Realistic",
      (period) => (period ? formatInterface2(period) : "-"),
    ],
    [
      "valueR",
      "Realistic",
      (period) => formatInterface2(Math.trunc(period.value)),
    ],
    [
      "valueO",
      "Optimistic",
      (period) => formatInterface2(Math.trunc(period.value)),
    ],
    [
      "valueP",
      "Pessimistic",
      (period) => formatInterface2(Math.trunc(period.value)),
    ],
    [
      "itemR",
      "Realistic",
      (period) => formatInterface2(Math.trunc(period.item)),
    ],
    [
      "itemO",
      "Optimistic",
      (period) => formatInterface2(Math.trunc(period.item)),
    ],
    [
      "itemP",
      "Pessimistic",
      (period) => formatInterface2(Math.trunc(period.item)),
    ],
    ["priceR", "Realistic", (period) => period.price.toFixed(1)],
    ["priceO", "Optimistic", (period) => period.price.toFixed(1)],
    ["priceP", "Pessimistic", (period) => period.price.toFixed(1)],
    [
      "valueAct",
      "Actual",
      (period) => (period ? formatInterface2(Math.trunc(period.value)) : "-"),
    ],
    ["growth", "Growth (%)", (period) => (period.growth * 100).toFixed(1)],
    ["dbtEb", "Applied Debt/EBITDA", (period) => period.debtEbitda.toFixed(1)],
    [
      "margin",
      `${getItem(valuation)} Margin (%)`,
      (period) => (period.margin * 100).toFixed(1),
    ],
    [
      "item",
      getItem(valuation),
      (period) => formatInterface2(Math.trunc(period.item)),
    ],
    [
      "discounted",
      "Discounted CF",
      (period) =>
        period.discounted < 0
          ? formatInterface2(Math.trunc(period.item))
          : formatInterface2(Math.trunc(period.discounted)),
    ],
    [
      "wacc",
      `Discount Rate`,
      (period, i) =>
        Math.pow(1 + period[chIK ? "wacc" : "costOfEquity"], i + 1).toFixed(2),
    ],
    [
      "sharesF",
      "Divide by: Shares",
      (period) => formatInterface2(Math.trunc(period.numOfShares)),
    ],
    [
      "debtF",
      "Less: Debt",
      (period) => formatInterface2(Math.trunc(period.debtEbitda * period.item)),
    ],
    [
      "evF",
      "Enterprise Value",
      (period) => formatInterface2(Math.trunc(period.ev), true),
    ],
    [
      "eqvF",
      "Equity Value",
      (period) =>
        formatInterface2(
          Math.trunc(period.ev - period.debtEbitda * period.item),
          true
        ),
    ],
    [
      "eps",
      `${valuation === "P/E" ? "Earnings" : "Revenue"} per Share`,
      (period) =>
        (
          period[`${valuation === "P/E" ? "item" : "value"}`] /
          period.numOfShares
        ).toFixed(1),
    ],
    [
      "total",
      "DCF Summation",
      (sum) => formatInterface2(Math.trunc(sum), true),
    ],
    ["cash", "Add: Cash", (sum) => formatInterface2(sum, true)],
    ["fas", "Add: Financial Assets", (sum) => formatInterface2(sum, true)],
    ["debt", "Less: Debt", (sum) => formatInterface2(sum, true)],
    ["nci", "Less: NC Interests", (sum) => formatInterface2(sum, true)],
    ["eqv", "Equity Value", (sum) => formatInterface2(sum, true)],
    ["shares", "Divide by: Shares", (sum) => formatInterface2(sum, true)],
    ["ivps", "Intrinsic Value per Share", (sum) => sum.toFixed(2)],
    ["multiple", `Applied ${valuation}`, (sum) => sum.multi.toFixed(1) + " x"],
    ["price", "Stock Price", (sum) => sum.price.toFixed(1)],
    ["fv", "Fair Value", (sum) => sum.fairVal.toFixed(1)],
    [
      "diff",
      "Discount/Premium (%)",
      (sum) => {
        return sum.fairVal > 175
          ? ((sum.fairVal / 175 - 1) * 100).toFixed(1)
          : ((1 - 175 / sum.fairVal) * 100).toFixed(1);
      },
    ],
    ["periods", "Period", (period) => period.period],
  ];
}
