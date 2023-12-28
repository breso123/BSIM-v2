import { formatNumOfShares } from "../../../../helpers/formatters";
import CircleReused from "../../../../ui/circle/CircleReused";

/* eslint-disable react/prop-types */
function ReusableCirc({ val, sdoVal, inputEl }) {
  return (
    <>
      <CircleReused num={sdoVal} svgSize={275} strokeWidth={6} sdo={577} />
      <div className="absolute flex flex-col items-center bottom-[5%] left-[5%]">
        <p className="text-3xl text-blue-900/75 font-semibold">
          {inputEl === "short_ratio" ? "-" : formatNumOfShares(val)}
        </p>
      </div>
    </>
  );
}

export default ReusableCirc;
