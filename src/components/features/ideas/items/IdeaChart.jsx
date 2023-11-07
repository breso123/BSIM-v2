/* eslint-disable react/prop-types */
import IdeaBar from "./IdeaBar";
import IdeaCirc from "./IdeaCirc";

function IdeaChart({ values, cagr, str }) {
  return (
    <div className="w-full h-1/2 py-6 bg-blue-100/30 rounded-xl flex items-end justify-center">
      <div className="w-2/3 h-full flex items-end justify-center gap-3">
        {values?.map((v, i, arr) => {
          const max = Math.max(...arr.map((v) => v.value));
          const height = {
            height: v.value === max ? "100%" : `${(v.value / max) * 100}%`,
            backgroundColor: `${v.type === "act" ? "midnightblue" : "blue"}`,
          };

          return <IdeaBar height={height} key={i} period={v.period} />;
        })}
      </div>
      <IdeaCirc cagr={cagr} fcstString={str} />
    </div>
  );
}

export default IdeaChart;
