/* eslint-disable react/prop-types */
import ReusableSVG from "../../../../../../reusableSVG/ReusableSVG";
import FormIdeaBar from "../../formItems/FormIdeaBar";

function IdeaBarChart({ allValues, cagr, length }) {
  const sdo = (1 - (cagr < 0 ? Math.abs(cagr) : cagr)) * 575;
  return (
    <div
      style={{ gridTemplateColumns: "2fr 1fr" }}
      className="grid grid-cols-2 items-center h-[90%]"
    >
      <div className="w-full h-full flex items-end">
        {allValues.map((el, i, arr) => {
          const max = Math.max(...arr.map((a) => a.value));

          return (
            <FormIdeaBar
              el={el}
              previous={arr[i - 1]}
              key={i}
              index={i}
              type={i <= length ? "actual" : "estimate"}
              max={max}
            />
          );
        })}
      </div>
      <div className="relative">
        <p className="w-full text-center italic font-sans text-indigo-700 tracking-wide">
          10Y CAGR (Estimate)
        </p>
        <ReusableSVG
          svgSize={275}
          percent={cagr}
          strokeDashoffset={sdo}
          strokeWidth={4}
        />
      </div>
    </div>
  );
}

export default IdeaBarChart;
