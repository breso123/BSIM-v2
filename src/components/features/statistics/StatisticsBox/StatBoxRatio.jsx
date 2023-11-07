import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";

/* eslint-disable react/prop-types */
function StatBoxRatio({ title, ratios }) {
  return (
    <div className="flex flex-col items-center justify-center h-72 w-[95%] mb-2 mt-1 p-2 bg-orange-100/25 relative shadow-statPrice">
      <StatBoxHeader title={title} />
      <StatBoxMain>
        <div className="grid grid-cols-1 items-center self-start mt-8 justify-items-center w-[90%] gap-y-2 ">
          <div className="flex w-full h-[2rem] text-purple-900 font-semibold font-sans items-center justify-around mb-4 shadow-hoverFins rounded-full">
            <p className="w-[40%] pl-8 text-sm">Ratio</p>
            <p className="w-[30%] pl-8 text-sm">Value</p>
            <p className="w-[30%] pl-8 text-sm">Status</p>
          </div>
          {ratios?.map((ratio, i) => {
            return (
              <div key={i} className="flex w-full items-center justify-around">
                <p className="w-[40%] pl-8 text-sm text-stone-900/75 font-semibold drop-shadow-lg">
                  {ratio.item}
                </p>
                <p className="w-[30%] pl-8 italic text-blue-950/75 font-semibold drop-shadow-gridderInd">
                  {ratio.value.toFixed(2)}
                </p>
                <p
                  style={{ color: ratio.col }}
                  className="w-[30%] pl-8 text-blue-700 font-mono text-xs"
                >
                  {ratio.status}
                </p>
              </div>
            );
          })}
        </div>
      </StatBoxMain>
    </div>
  );
}

export default StatBoxRatio;
