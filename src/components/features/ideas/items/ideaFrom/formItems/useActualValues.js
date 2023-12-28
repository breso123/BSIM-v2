import { useSelector } from "react-redux";
import {
  findCAGR,
  findGR,
  findMG,
  findMarginWA,
  getItem,
} from "../../../helpers/newIdeaMisc";

function useActualValues(type, val) {
  const { statements } = useSelector((state) => state.financials);
  const revenue = statements.income_statement.map((st) => st.sa);
  const debt = statements.balance_sheet.map((st) => st.dbtT);
  const shares = statements.income_statement.map((st) => st.bsou);
  const deb = statements.financial_ratios.map((st) => st.dteb);
  const periods = statements.income_statement.map((st) =>
    new Date(st.fda).getFullYear()
  );

  if (type === "ebmg")
    return {
      periods,
      revenue: getItem(statements, val),
      growth: findMG(getItem(statements, val), statements),
      cagr: findMarginWA(statements, revenue, val),
    };

  if (type === "shares") {
    return {
      periods,
      revenue: shares,
      growth: findGR(shares),
      cagr: findCAGR(shares),
    };
  }
  if (type === "dbtEb") {
    return {
      periods,
      revenue: debt,
      growth: deb,
    };
  } else
    return {
      periods,
      revenue,
      growth: findGR(revenue),
      cagr: findCAGR(revenue),
    };
}

export default useActualValues;
