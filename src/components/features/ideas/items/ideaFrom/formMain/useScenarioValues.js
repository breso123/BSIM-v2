import { shortFCST } from "../../../../../../helpers/miscFuncs";
import { useParams } from "react-router-dom";
import { findVals, getItem, getVls } from "../../../helpers/hFcstOutputs";

function useScenarioValues(newIdea, actual) {
  const { ideasKey } = useParams();
  const multies = findVals(newIdea, "multi_", "multiCAGR", "multi");
  const margins = findVals(newIdea, "ebmg_", "ebmgCAGR", "ebmg");
  const dbtEb = findVals(newIdea, "dbtEb_", "dbtEbCAGR", "dbtEb");

  const values = (type) => {
    const vls = getVls(type, newIdea);
    return [
      ...shortFCST(actual[actual.length - 1], vls).map((val, i, arr) => {
        const period = actual[actual.length - 1]?.period + i + 1;
        const growth =
          i === 0
            ? val / actual[actual.length - 1]?.value - 1
            : val / arr[i - 1] - 1;
        const item = val * margins[i];

        if (getItem(ideasKey, newIdea) === "fcfl") {
          const discountRate = Math.pow(1 + newIdea.wacc / 100, i + 1);
          return {
            period,
            wacc: newIdea.wacc / 100,
            value: val,
            type: "est",
            growth,
            margin: margins[i],
            item: Math.trunc(item),
            discounted: (val * margins[i]) / discountRate,
          };
        } else {
          const discountRate = Math.pow(1 + newIdea.costOfEquity / 100, i + 1);
          const numOfShares = shortFCST(
            actual[actual.length - 1]?.numOfShares,
            getVls("shares", newIdea),
            false
          )[i];

          const multi = multies[i] * 100;
          const price = (item / numOfShares) * multi;

          if (getItem(ideasKey, newIdea) === "nin") {
            return {
              period,
              value: val,
              type: "est",
              growth,
              multi,
              price,
              margin: margins[i],
              item: Math.trunc(item),
              numOfShares,
              costOfEquity: newIdea.costOfEquity / 100,
              fairVal: price / discountRate,
            };
          }
          if (getItem(ideasKey, newIdea) === "sa") {
            return {
              period,
              value: val,
              type: "est",
              growth,
              multi,
              price: (val / numOfShares) * multi,
              numOfShares,
              costOfEquity: newIdea.costOfEquity / 100,
              fairVal: ((val / numOfShares) * multi) / discountRate,
            };
          }

          if (getItem(ideasKey, newIdea) === "eb") {
            const ev = item * multies[i] * 100;
            const eqv = ev - dbtEb[i] * 100 * item;
            const price = eqv / numOfShares;
            return {
              period,
              value: val,
              type: "est",
              growth,
              multi,
              item: Math.trunc(item),
              ev,
              eqv,
              numOfShares,
              costOfEquity: newIdea.costOfEquity / 100,
              margin: margins[i],
              debtEbitda: dbtEb[i] * 100,
              debt: dbtEb[i] * val,
              price,
              fairVal: price / discountRate,
            };
          }
        }
      }),
    ];
  };

  const setFV = (val) => {
    const v = values(val);
    const terminalVal =
      (v[v.length - 1].item * (1 + newIdea.tg / 100)) /
      (+newIdea.wacc / 100 - newIdea.tg / 100);

    return {
      period: "TVA",
      value: terminalVal,
      wacc: newIdea.wacc / 100,
      discounted: terminalVal / Math.pow(1 + newIdea.wacc / 100, 9),
    };
  };

  const setScenario = (sc) =>
    getItem(ideasKey, newIdea) === "fcfl"
      ? [...values(sc), setFV(sc)]
      : values(sc);

  return {
    opt: setScenario("optimistic"),
    pess: setScenario("pessimistic"),
    real: setScenario("realistic"),
  };
}

export default useScenarioValues;
