/* eslint-disable react/prop-types */
import ReusableSVG from "../../../reusableSVG/ReusableSVG";
import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";

function StatBoxRatioRt({ title, ratios }) {
  return (
    <div className="flex flex-col items-center justify-center h-72 w-[95%] mb-2 mt-1 p-2 bg-orange-100/25 relative shadow-statPrice col-span-2">
      <StatBoxHeader title={title} />
      <StatBoxMain>
        <div className="grid grid-cols-4 items-center mt-8 justify-items-center w-[90%] divide-x divide-blue-950/25 self-start">
          {ratios?.map((ratio, i) => {
            const val = ratio.value;
            const sdo = (1 - (val < 0 ? Math.abs(val) : val)) * 375;
            return (
              <div
                key={i}
                className="flex flex-col w-full items-center justify-around"
              >
                <p
                  style={{ textShadow: "5px 5px 20px midnightblue" }}
                  className="w-[50%] text-xs text-center text-indigo-950 font-semibold"
                >
                  {ratio.item}
                </p>
                <ReusableSVG
                  percent={val}
                  strokeWidth={5}
                  svgSize={175}
                  strokeDashoffset={sdo}
                />
              </div>
            );
          })}
        </div>
      </StatBoxMain>
    </div>
  );
}

export default StatBoxRatioRt;
