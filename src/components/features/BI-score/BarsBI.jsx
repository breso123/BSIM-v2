/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function BarsBI({ type, maxVal, val }) {
  const text = `text-${val > 0 ? "blue-900" : "red-700"}`;
  const wNeg = { width: (val < 0 ? (Math.abs(val) / maxVal) * 100 : 1) + "%" };
  const wPos = { width: (val > 0 ? (val / maxVal) * 100 : 1) + "%" };
  const barHeight = type === "head" ? "6" : "5";
  const styles = {
    head: ["w-[70%]", "h-16 w-[4.5rem] text-lg rounded-3xl"],
    body: ["h-[90%] w-full", "h-12 w-12 rounded-2xl text-sm"],
  };

  return (
    <div
      className={`flex flex-col items-center justify-center ${styles[type][0]}`}
    >
      <div className="w-full font-semibold font-mono flex items-center justify-between text-lg">
        <p className="text-red-700">{"-" + maxVal}</p>
        <p className="text-blue-900">{"+" + maxVal}</p>
      </div>
      <div className="w-full flex items-center">
        <div
          className={`h-${barHeight} w-1/2 shadow-biBarNeg rounded-l-full flex items-center justify-end`}
        >
          <div
            style={wNeg}
            className={`h-3 bg-red-700 rounded-l-full transition-all duration-200`}
          ></div>
        </div>
        <div
          className={`shadow-biMiddleCirc flex items-center justify-center ${styles[type][1]}`}
        >
          <p className={`font-semibold ${text}`}>
            {val > 0 ? "+" : ""}
            {val.toFixed(1)}
          </p>
        </div>
        <div
          className={`h-${barHeight} w-1/2 shadow-biBarPos rounded-r-full flex items-center`}
        >
          <div
            style={wPos}
            className={`h-3 bg-blue-900 rounded-r-full transition-all duration-200`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default BarsBI;
