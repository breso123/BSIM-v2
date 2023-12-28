import { useSelector } from "react-redux";
import useStockModifier from "../../general/returns/useStockModifier";
import { finalVals, findVals, getActualData } from "../helpers/hFcstOutputs";

function useForecaster(statement, item) {
  const { statements } = useSelector((state) => state.financials);
  const newIdea = useSelector((state) => state.newIdea);
  const { stockMax } = useSelector((state) => state.general);
  const { yearlyData } = useStockModifier(stockMax.values);
  const { selectedIdea: si } = newIdea;

  const vals = findVals(newIdea, `${si}_`, `${si}CAGR`, si);
  const nosGR = findVals(newIdea, "shares_", "sharesCAGR", "shares");
  const multies = findVals(newIdea, "multi_", "multiCAGR", "multi");
  const margins = findVals(newIdea, "ebmg_", "ebmgCAGR", "ebmg");
  const dbtEb = findVals(newIdea, "dbtEb_", "dbtEbCAGR", "dbtEb");

  const prices = yearlyData.map((d) => d.close).slice(1, 10);
  const actual = getActualData(statements, item, prices);

  const allValues = finalVals(
    actual,
    item,
    vals,
    newIdea,
    item === "fcfl" ? [] : multies,
    nosGR,
    margins,
    item === "fcfl" ? [] : dbtEb
  );
  if (!actual) return;

  return { vals, actual, allValues, nosGR, multies, margins, dbtEb };
}

export default useForecaster;
