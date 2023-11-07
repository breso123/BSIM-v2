import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function useRatios(st) {
  const [liquidity, setLiquidity] = useState([]);
  const [indebtness, setIndebtness] = useState([]);
  const [returns, setReturns] = useState([]);
  const [cfRatios, setCfRatios] = useState({});
  const cfType = useSelector((state) => state.statistics.cfItem);

  useEffect(() => {
    const ratios = st?.financial_ratios;
    const bs = st?.balance_sheet;
    const cf = st?.cash_flow;

    const cols = ["#2563eb", "#15803d", "#dc2626"];
    const liqItems = [
      ["Current Ratio", 1, 2],
      ["Quick Ratio", 0.5, 1],
      ["Cash Ratio", 0.2, 0.5],
    ];

    const idbItems = [
      ["Liabilities Ratio", 0.7, 0.3],
      ["Debt/Equity", 1.5, 1],
      ["Debt/EBITDA", 5, 3.5],
      ["Leverage", 3.5, 2.5],
    ];

    const rtrnItems = [
      "Return on Assets",
      "Return on Equity",
      "Return on Capital Employed",
      "Return on Tangible Assets",
    ];

    const cfItems = ["Total Debt", "Short-term Debt", "Long-term Debt"];
    const shdItems = ["Total Distribution", "Dividends", "Share Repurchase"];

    const liqMapped = ["cr", "qr", "caR"].map((item, i) => {
      const ratio = ratios?.[0][item];
      const checkLesser = ratio < liqItems[i][1];
      const checkBetween = ratio > liqItems[i][1] && ratio < liqItems[i][2];
      const status = checkLesser
        ? `Below ${liqItems[i][1]}`
        : checkBetween
        ? "Stable"
        : "Good";
      return {
        item: liqItems[i][0],
        col: checkLesser ? cols[2] : checkBetween ? cols[1] : cols[0],
        status,
        value: ratio ?? 0,
      };
    });

    const idbMapped = ["lta", "dte", "dteb", "lev"].map((item, i) => {
      const ratio = ratios?.[0][item];
      const checkGreater = ratio > idbItems[i][1];
      const checkBetween = ratio < idbItems[i][1] && ratio > idbItems[i][2];
      const status = checkGreater
        ? `Above ${idbItems[i][1]}`
        : checkBetween
        ? "Stable"
        : "Good";

      return {
        item: idbItems[i][0],
        col: checkGreater ? cols[2] : checkBetween ? cols[1] : cols[0],
        status,
        value: ratio ?? 0,
      };
    });

    const rtrnMapped = ["roa", "roe", "roce", "rota"].map((item, i) => {
      return { item: rtrnItems[i], value: bs?.[0][item] };
    });

    const cfDebt = ["dbtT", "stde", "ltde"].map((item, i) => {
      return {
        item: cfItems[i],
        value: bs?.[0][item],
        coverage: cf?.[0][cfType] / bs?.[0][item] ?? 0,
      };
    });

    const shDist = ["shdT", "cdi", "csre"].map((item, i) => {
      return {
        item: shdItems[i],
        value: -cf?.[0][item],
        coverage: cf?.[0][cfType] / -cf?.[0][item],
      };
    });

    setLiquidity(liqMapped);
    setIndebtness(idbMapped);
    setReturns(rtrnMapped);
    setCfRatios({ debt: cfDebt, shd: shDist });
  }, [cfType, st]);

  return { liquidity, indebtness, returns, cfRatios };
}
