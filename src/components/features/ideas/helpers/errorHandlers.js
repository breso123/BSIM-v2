function marginHepler(state) {
  if (state.valuation === "P/E") return "Net";
  if (state.valuation === "EV/EBITDA") return "EBITDA";
  if (state.valuation === "DCF") return "Free Cash Flow";
}

export function getSharesError(state) {
  if (state.forecastBySh === "cagr") {
    if (state.sharesCAGR === "") return "Please enter number of shares CAGR";
    if (isNaN(+state.sharesCAGR)) return "Please enter valid number";
    else return "";
  } else {
    const vals = Object.entries(state).filter((s) => s[0].includes("shares_"));
    if (vals.some((v) => v[1] === ""))
      return "All number of shares inputs must be filled";
    if (vals.some((v) => isNaN(+v[1])))
      return "All inputed values need to be valid numbers";
    else return "";
  }
}

export function getErrorMulti(state) {
  if (state.forecastByMulti === "average") {
    if (state.multiCAGR === "") return "Please enter your average multiple";
    if (isNaN(+state.multiCAGR)) return "Please enter valid number";
    else return "";
  } else {
    const vals = Object.entries(state).filter((s) => s[0].includes("multi_"));
    if (vals.some((v) => v[1] === ""))
      return "All multiple inputs must be filled";
    if (vals.some((v) => isNaN(+v[1])))
      return "All inputed values need to be valid numbers";
    else return "";
  }
}

export function getErrorEbmg(state) {
  const mg = marginHepler(state);
  if (state.forecastByEbmg === "average") {
    if (state.ebmgCAGR === "") return `Please enter your average ${mg} margin`;
    if (isNaN(+state.ebmgCAGR)) return "Please enter valid number";
    else return "";
  } else {
    const vals = Object.entries(state).filter((s) => s[0].includes("ebmg_"));
    if (vals.some((v) => v[1] === ""))
      return `All ${mg} margin inputs must be filled`;
    if (vals.some((v) => isNaN(+v[1])))
      return "All inputed values need to be valid numbers";
    else return "";
  }
}

export function getErrorDbtEb(state) {
  if (state.forecastByDbtEb === "average") {
    if (state.dbtEbCAGR === "") return "Please enter your average Debt/EBITDA";
    if (isNaN(+state.dbtEbCAGR)) return "Please enter valid number";
    if (+state.dbtEbCAGR <= 0) return "Debt/EBITDA must greater than 0";
    else return "";
  } else {
    const vals = Object.entries(state).filter((s) => s[0].includes("dbtEb_"));
    if (vals.some((v) => v[1] === ""))
      return `All Debt/EBITDA margin inputs must be filled`;
    if (vals.some((v) => isNaN(+v[1])))
      return "All inputed values need to be valid numbers";
    if (vals.some((v) => +v[1] <= 0))
      return "All inputed values need to be greater than 0";
    else return "";
  }
}

export function getErrorCOE(state) {
  if (state.costOfEquity === "") return "Please enter Cost of Equity";
  if (isNaN(+state.costOfEquity))
    return "Cost of Equity must be a valid number";
  if (+state.costOfEquity <= 0)
    return "Cost of Equity must be a positive number";
  else return "";
}

export function getErrorWACC(state) {
  if (state.wacc === "") return "Please enter W.A.C.C.";
  if (isNaN(+state.wacc)) return "W.A.C.C. must be a valid number";
  if (+state.wacc <= 0) return "W.A.C.C. must be a positive number";
  else return "";
}

export function getErrorTG(state) {
  if (state.tg === "") return "Please enter T-Growth";
  if (isNaN(+state.tg)) return "T-Growth must be a valid number";
  if (+state.tg <= 0) return "T-Growth must be a positive number";
  else return "";
}

export function getInputError(state) {
  if (state.forecastBy === "cagr") {
    const CAGRs = [
      state.optimisticCAGR,
      state.pessimisticCAGR,
      state.realisticCAGR,
    ];
    if (+state.optimisticCAGR <= +state.realisticCAGR)
      return "Optimistic CAGR must be greater than realistic";
    if (+state.pessimisticCAGR >= +state.realisticCAGR)
      return "Pessimistic CAGR must be lesser than realistic";
    if (CAGRs.some((cagr) => cagr === ""))
      return "Please fill all revenue CAGR inputs";
    if (CAGRs.some((cagr) => isNaN(+cagr)))
      return "Revenue CAGR must be a valid number";
    else return "";
  } else {
    const optimistic = Object.entries(state).filter((s) =>
      s[0].includes("optimistic_")
    );
    const realistic = Object.entries(state).filter((s) =>
      s[0].includes("realistic_")
    );
    const pessimistic = Object.entries(state).filter((s) =>
      s[0].includes("pessimistic_")
    );
    const allScenarios = [...optimistic, ...realistic, ...pessimistic];
    if (allScenarios.some((s) => s[1] === ""))
      return "Please fill all revenue growth inputs";
    if (allScenarios.some((s) => isNaN(+s[1])))
      return "All inputed values need to be a valid number";
    if (pessimistic.some((ps, i) => +ps[1] >= +realistic[i][1]))
      return "All pessimistic growth rates need to be lesser than realistic";
    if (optimistic.some((op, i) => +op[1] <= +realistic[i][1]))
      return "All optimistic growth rates need to be greater than realistic";
    else return "";
  }
}
