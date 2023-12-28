export function getRevGrowth(index, timeFrame, timeType, statement, item) {
  if (timeType === "oneYear" || timeFrame === "Y1")
    return statement?.[index][item] / statement?.[index + 1][item] - 1;
  else
    return (
      Math.pow(
        statement?.[0][item] / statement?.[+timeFrame[1]][item],
        1 / timeFrame[1]
      ) - 1
    );
}

export function getAvgImprovement(index, timeFrame, timeType, statement, mg) {
  if (timeType === "oneYear" || timeFrame === "Y1")
    return statement?.[index][mg] - statement?.[index + 1][mg];
  else
    return (
      (statement?.[0][mg] - statement?.[+timeFrame[1]][mg]) / +timeFrame[1]
    );
}

export function getStatItem(index, timeFrame, timeType, statement, item) {
  if (timeType === "oneYear" || timeFrame === "Y1")
    return statement?.[index][item];
  else
    return statement
      ?.slice(0, +timeFrame[1])
      .map((st) => st[item])
      .reduce((item, acc) => item + acc, 0);
}

export function getMarginWA(index, timeFrame, timeType, statement, is, item) {
  if (timeType === "oneYear" || timeFrame === "Y1")
    return statement?.[index][item] / is?.[index].sa;
  else {
    const itemSum = statement
      ?.slice(0, +timeFrame[1])
      .map((st) => st[item])
      .reduce((item, acc) => item + acc, 0);

    const salesSum = is
      ?.slice(0, +timeFrame[1])
      .map((st) => st.sa)
      .reduce((sa, acc) => sa + acc, 0);
    return itemSum / salesSum;
  }
}

export function getAverageItem(index, timeFrame, timeType, statement, item) {
  if (timeType === "oneYear" || timeFrame === "Y1")
    return statement?.[index][item];
  else {
    const itemSum = statement
      ?.slice(0, +timeFrame[1])
      .map((st) => st[item])
      .reduce((item, acc) => item + acc, 0);
    if (!itemSum) return null;
    else return itemSum / +timeFrame[1];
  }
}
