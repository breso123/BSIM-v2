import { formatNumOfShares } from "../../../../helpers/formatters";
import ReusableSVG from "../../../reusableSVG/ReusableSVG";

/* eslint-disable react/prop-types */
function ReusableCirc({ val, sdoVal, inputEl }) {
  const strokeDashoffset = (1 - (sdoVal < 0 ? Math.abs(sdoVal) : sdoVal)) * 577;
  return (
    <>
      <ReusableSVG
        svgSize={275}
        percent={sdoVal}
        strokeDashoffset={strokeDashoffset}
        strokeWidth={6}
      />
      <div className="absolute flex flex-col items-center bottom-[5%] left-[5%]">
        <p className="text-3xl text-blue-900/75 font-semibold">
          {inputEl === "short_ratio" ? "-" : formatNumOfShares(val)}
        </p>
      </div>
    </>
  );
}

export default ReusableCirc;
