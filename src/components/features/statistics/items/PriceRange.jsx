/* eslint-disable react/prop-types */
import ReusableSVG from "../../../reusableSVG/ReusableSVG";

function PriceRange({ pv }) {
  //const statistics = JSON.parse(localStorage.getItem("statistics"));
  //const pv = statistics["price_and_volume"];

  const ch = pv?.fifty_two_week_change;
  const ma50 = pv?.day_50_ma;
  const ma200 = pv?.day_200_ma;
  const low = pv?.fifty_two_week_low;
  const high = pv?.fifty_two_week_high;
  const strokeDashoffset = (1 - (ch < 0 ? Math.abs(ch) : ch)) * 210;

  return (
    <div className="w-[16rem] h-[0.2rem] mb-6 relative bg-gradient-to-r from-orange-500 to-blue-800">
      {[ma50, ma200].map((ma, i) => {
        const bgCol = `${i === 0 ? "midnightblue" : "#4338ca"}`;
        const leftPos = `${((ma - low) / (high - low)) * 100}%`;
        return (
          <div
            key={i}
            style={{ left: leftPos, backgroundColor: bgCol }}
            className="h-4 w-1.5 bg-blue-950 mt-2 rounded-full absolute top-[-15px]"
          ></div>
        );
      })}
      <div className="h-4 w-[0.15rem] bg-black absolute top-[-6px] rounded-full">
        <p className="absolute top-[-20px] right-[-17px] text-xs font-semibold">
          {low?.toFixed(2)}
        </p>
      </div>
      <div
        style={{ left: "100%" }}
        className="h-4 w-[0.15rem] bg-black absolute top-[-6px] rounded-full"
      >
        <p className="absolute top-[-20px] right-[-17px] text-xs font-semibold">
          {high?.toFixed(2)}
        </p>
      </div>
      <div className="pt-6">
        <ReusableSVG
          percent={ch}
          strokeDashoffset={strokeDashoffset}
          svgSize={100}
          strokeWidth={4}
        />
      </div>
    </div>
  );
}

export default PriceRange;
