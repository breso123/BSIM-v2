import { useEffect, useState } from "react";

export function useStatsFS(st) {
  const [isData, setIsData] = useState([]);
  const [bsData, setBsData] = useState([]);
  const [cfData, setCfData] = useState([]);

  useEffect(() => {
    const is = st?.income_statement;
    const bs = st?.balance_sheet;
    const cf = st?.cash_flow;

    const cols = [
      ["#172554"],
      ["#2563eb", "#dc2626"],
      ["#818cf8", "#ea580c"],
      ["#0891b2", "#f59e0b"],
      ["#6d28d9", "#be123c"],
    ];

    const isItems = [
      "Revenue",
      "Gross Profit",
      "EBITDA",
      "Operating Income",
      "Net Income",
    ];
    const bsItems = ["Total Assets", "Debt", "Equity", "Cash"];
    const cfItems = ["Revenue", "Debt", "Operating CF", "Free CF"];

    const isMapped = ["sa", "gpr", "eb", "oin", "nin"].map((item, i) => {
      return {
        item: isItems[i],
        col: cols[i],
        value: is?.[0][item] ?? 0,
        growth: is?.[0][`${item}G`] ?? 0,
        margin: is?.[0][`${item}M`] ?? 0,
        g3y: Math.pow(is?.[0][item] / is?.[3]?.[item], 1 / 3) - 1,
      };
    });

    const bsMapped = ["tas", "dbtT", "tseq", "caceq"].map((item, i) => {
      return {
        item: bsItems[i],
        col: cols[i],
        value: bs?.[0][item] ?? 0,
        growth: bs?.[0][`${item}G`] ?? 0,
        margin: bs?.[0][`${item}M`] ?? 0,
        g3y: Math.pow(bs?.[0][item] / bs?.[3]?.[item], 1 / 3) - 1,
      };
    });

    const cfMapped = ["sa", "dbtT", "ocfl", "fcfl"].map((item, i) => {
      const stat = item === "sa" ? is : item === "dbtT" ? bs : cf;
      return {
        item: cfItems[i],
        col: cols[i],
        value: stat?.[0][item] ?? 0,
        growth: stat?.[0][`${item}G`] ?? 0,
        margin: stat?.[0][`${item}Mg`] ?? 0,
        g3y: Math.pow(stat?.[0][item] / stat?.[3]?.[item], 1 / 3) - 1,
      };
    });

    setIsData(isMapped);
    setBsData(bsMapped);
    setCfData(cfMapped);
  }, [st]);

  return { isData, bsData, cfData };
}
