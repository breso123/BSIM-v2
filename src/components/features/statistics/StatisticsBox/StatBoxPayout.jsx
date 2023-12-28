/* eslint-disable react/prop-types */
import Box from "../../../../ui/box/Box";
import CircleReused from "../../../../ui/circle/CircleReused";
import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";

function StatBoxPayout({ pv, eps }) {
  const payout = pv?.payout_ratio;

  return (
    <Box type="payout">
      <StatBoxHeader title="EPS & Payout Ratio" />
      <StatBoxMain>
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-blue-950 font-serif tracking-wide">
            Earnings per Share - TTM
          </p>
          <p className="text-6xl text-blue-950 font-semibold drop-shadow-gridderInd tracking-wider">
            {eps?.toFixed(2)}
          </p>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <CircleReused num={payout} strokeWidth={6} svgSize={325} sdo={675} />
        </div>
      </StatBoxMain>
    </Box>
  );
}

export default StatBoxPayout;
