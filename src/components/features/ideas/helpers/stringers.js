export function getFinalTitle(item, str) {
  if (item === "Periods") return item;
  if (item === "Growth") return "Change (%)";
  if (item === "Margin") return "Margin (%)";
  if (item === "Debt/EBITDA") return "Debt/EBITDA (%)";
  else return str;
}

export function getTableTitle(type, item, val) {
  if (!type) return ["Historical Revenue Performance", "Revenue"];
  if (type === "ebmg") return [`Historical ${item} Performance`, item];
  if (type === "shares") return ["Number of Shares", "Shares"];
  if (type === "multi") return ["Historical Multiples", `${val}`];
  if (type === "dbtEb") return ["Historical Det/EBITDA", "Debt"];
}

export function getLabelText(type, newIdea) {
  if (type === "shares") return "Number of Shares";
  if (type === "multi") return `Applied ${newIdea.multipleVal}`;
  if (type === "ebmg" && newIdea.valuation === "EV/EBITDA") return "EBITDA (%)";
  if (type === "ebmg" && newIdea.valuation === "P/E") return "Net Income (%)";
  if (type === "ebmg" && newIdea.valuation === "DCF") return "Free CF (%)";
  if (type === "dbtEb") return "Applied Debt/EBITDA";
  else return type[0].toUpperCase() + type.slice(1);
}

export function getValsLC(val) {
  if (val === "P/S") return ["value", "price", "fairVal"];
  if (val === "DCF") return ["value", "item"];
  else return ["value", "item", "price", "fairVal"];
}

export function getLegendLC(val) {
  const name =
    val === "DCF"
      ? "Free Cash Flow"
      : `${val === "P/E" ? "Net Income" : "EBITDA"}`;
  if (val === "P/S") return ["Revenue", "Stock Price", "Price vs. FV"];
  if (val === "DCF") return ["Revenue", "Free Cash Flow"];
  else return ["Revenue", name, "Stock Price", "Price vs. FV"];
}

export function getLegendStrLC(item) {
  const dataSC = [
    { item: "Optimistic", color: "bg-blue-700" },
    {
      item: `${item !== "fairVal" ? "Realistic / Historical" : "Realistic"}`,
      color: "bg-blue-950",
    },
    { item: "Pessimistic", color: "bg-orange-700" },
  ];
  const dataCP = { item: "Current Price", color: "bg-green-700" };
  return item === "fairVal" ? [...dataSC, ...dataCP] : dataSC;
}

export function getMarginStr(val) {
  if (val === "DCF") return ["Free Cash Flow", "FCF Margin"];
  if (val === "P/E") return ["Net Income", "Net Margin"];
  if (val === "EV/EBITDA") return ["EBITDA", "EBITDA Margin"];
  else return [];
}

export function getStatAndItem(newIdea) {
  if (newIdea.valuation === "DCF") return ["cash_flow", "fcfl"];
  if (newIdea.valuation === "P/E") return ["income_statement", "nin"];
  if (newIdea.valuation === "EV/EBITDA") return ["income_statement", "eb"];
  else return ["income_statement", "sa"];
}

export function findStylingIOO(val) {
  const dataRev = [
    { item: "Revenue (Act)", color: "bg-blue-900" },
    { item: "Revenue (Est)", color: "bg-indigo-500" },
  ];

  const dataProfit = [
    {
      item: `${getMarginStr(val)[0]} (Act)`,
      color: ["bg-sky-300", "bg-red-300"],
    },
    {
      item: `${getMarginStr(val)[0]} (Est)`,
      color: ["bg-blue-300", "bg-orange-300"],
    },
  ];

  if (val === "P/S") return dataRev;
  else return [...dataRev, ...dataProfit];
}
