export function fvDCF(arr, wacc, margin, tg, sum, numSh) {
  const discountedVals = arr.map((vls) => {
    return vls
      .map((vl, i) => {
        const item = vl * margin;
        const discountRate = Math.pow(1 + wacc, i + 1);
        return item / discountRate;
      })
      .reduce((vl, acc) => vl + acc, 0);
  });

  const terminalVal = arr.map((vls) => {
    const last = vls[vls.length - 1] * margin;
    const terminalVal = (last * (1 + tg)) / (wacc - tg);
    const discountRate = Math.pow(1 + wacc, 9);
    return terminalVal / discountRate;
  });

  const dcfSum = discountedVals.map((dv, i) => dv + terminalVal[i]);
  const eqv = dcfSum.map((dc) => dc + sum);

  return eqv.map((eq) => eq / numSh);
}

export function fvEM(rev, coe, margin, multies, numSh, index, val, dbtEb) {
  return multies.map((multi) => {
    if (val === "P/E" || val === "P/S") {
      const item = val === "P/E" ? (rev * margin) / numSh : rev / numSh;
      const price = item * multi;
      return price / Math.pow(1 + coe, index + 1);
    } else {
      const ev = rev * margin * multi;
      const debt = rev * margin * dbtEb;
      const price = (ev - debt) / numSh;
      return price / Math.pow(1 + coe, index + 1);
    }
  });
}

export function reduceVals(arr, item) {
  return arr.realistic.values
    .slice(0, -1)
    .map((v) => v[item])
    .reduce((val, acc) => val + acc, 0);
}

export function findCOE(coe) {
  return [coe - 0.015, coe - 0.0075, coe, coe + 0.0075, coe + 0.015];
}
