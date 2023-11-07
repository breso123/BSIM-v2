import { shortFCST } from "../../../../../../helpers/miscFuncs";

function useScenarioValues(newIdea, actual) {
  const vls = (type) => {
    return newIdea.forecastBy === "custom"
      ? newIdea[type].map((t) => +t / 100)
      : Array.from({ length: 9 }, () => +newIdea[`${type}CAGR`] / 100);
  };

  const values = (type) => {
    return [
      ...shortFCST(actual[actual.length - 1], vls(type)).map((val, i) => {
        return {
          period: actual[actual.length - 1].period + i + 1,
          wacc: newIdea.wacc / 100,
          value: val,
          discounted: val / Math.pow(1 + newIdea.wacc / 100, i + 1),
        };
      }),
    ];
  };

  const setFV = (val) => {
    const v = values(val);
    const terminalVal =
      (v[v.length - 1].value * (1 + newIdea.tg / 100)) /
      (+newIdea.wacc / 100 - newIdea.tg / 100);

    return {
      period: "TVA",
      value: terminalVal,
      wacc: newIdea.wacc / 100,
      discounted: terminalVal / Math.pow(1 + newIdea.wacc, 1 / 9),
    };
  };

  const opt = [...values("optimistic"), setFV("optimistic")];
  const real = [...values("realistic"), setFV("realistic")];
  const pess = [...values("pessimistic"), setFV("pessimistic")];

  return { opt, pess, real };
}

export default useScenarioValues;
