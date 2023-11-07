import { useEffect, useState } from "react";
import { Quarters } from "../../../../helpers/miscFuncs";

const useStockModifier = (data) => {
  const [yearlyData, setYearlyData] = useState([]);
  const [quarterlyData, setQuarterlyData] = useState([]);

  useEffect(() => {
    if (!data) return;
    const annualReturns = [];
    const quarterlyReturns = [];
    const years = new Set(data.map((d) => new Date(d.datetime).getFullYear()));

    years.forEach((y) => {
      const yrs = data.filter((d) => new Date(d.datetime).getFullYear() === y);
      const quarters = Quarters(yrs);

      const annualData = {
        period: y,
        open: +yrs[yrs.length - 1].open,
        close: +yrs[0].close,
      };

      annualReturns.push(annualData);
      quarterlyReturns.push(quarters);
    });

    setYearlyData(annualReturns);
    setQuarterlyData(quarterlyReturns);
  }, [data]);
  //

  return { yearlyData, quarterlyData };
};

export default useStockModifier;
