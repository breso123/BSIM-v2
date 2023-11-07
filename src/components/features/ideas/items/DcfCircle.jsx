/* eslint-disable react/prop-types */
import ReusableSVG from "../../../reusableSVG/ReusableSVG";

function DcfCircle({ ivps, diff }) {
  const sdo = (1 - (diff < 0 ? Math.abs(diff) : diff)) * 250;
  return (
    <div className="w-[30%] h-full flex flex-col items-center justify-center text-xs gap-2">
      <p className="italic">Intrinsic Value</p>
      <p className="text-2xl drop-shadow-gridderInd font-semibold text-blue-950/80">
        {ivps.toFixed(2)}
      </p>
      <ReusableSVG
        svgSize={120}
        strokeWidth={4}
        percent={diff}
        strokeDashoffset={sdo}
      />
      <p
        className={`text-[1rem] mt-[-15px] font-serif font-semibold ${
          diff < 0 ? "text-orange-800" : "text-blue-950"
        }`}
      >
        {diff < 0 ? "Premium" : "Discount"}
      </p>
    </div>
  );
}

export default DcfCircle;
