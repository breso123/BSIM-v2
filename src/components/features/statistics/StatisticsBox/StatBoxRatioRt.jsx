/* eslint-disable react/prop-types */
import Box from "../../../../ui/box/Box";
import CircleReused from "../../../../ui/circle/CircleReused";

import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";

function StatBoxRatioRt({ title, ratios }) {
  return (
    <Box type="returns">
      <StatBoxHeader title={title} />
      <StatBoxMain>
        <div className="grid grid-cols-4 items-center mt-8 justify-items-center w-[90%] divide-x divide-blue-950/25 self-start">
          {ratios?.map((ratio, i) => {
            const v = ratio.value;

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
                <CircleReused num={v} svgSize={175} strokeWidth={5} sdo={375} />
              </div>
            );
          })}
        </div>
      </StatBoxMain>
    </Box>
  );
}

export default StatBoxRatioRt;
