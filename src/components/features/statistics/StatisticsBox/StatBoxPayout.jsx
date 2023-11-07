/* eslint-disable react/prop-types */
import ReusableSVG from "../../../reusableSVG/ReusableSVG";
import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";

function StatBoxPayout({ pv, eps }) {
  const payout = pv?.payout_ratio;
  const sdo = (1 - (payout < 0 ? Math.abs(payout) : payout)) * 675;

  return (
    <div className="flex flex-col items-center justify-center h-72 w-[70%] mb-2 mt-1 p-2 bg-indigo-200/25 relative shadow-statPrice col-span-2">
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
          <ReusableSVG
            percent={payout}
            strokeWidth={6}
            svgSize={325}
            strokeDashoffset={sdo}
          />
        </div>
      </StatBoxMain>
    </div>
  );
}

export default StatBoxPayout;
