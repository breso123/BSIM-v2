//import ReusableSVG from "../../../reusableSVG/ReusableSVG";
import { useParams } from "react-router-dom";
import CircleReused from "../../../../ui/circle/CircleReused";

/* eslint-disable react/prop-types */
function ChartUpper({ statements, item, supportItem }) {
  const { financialsKey } = useParams();
  return (
    <div className="flex items-center justify-around h-[20%]">
      {statements?.[financialsKey]?.map((p, i) => {
        const percItem = ["G", "M"].some((k) => k === supportItem)
          ? p[`${item}${supportItem}`]
          : p[supportItem];

        const checkItem100 = percItem >= 1 || percItem <= -1;
        const sdo = checkItem100 ? 0 : 210;

        return (
          <CircleReused key={i} sdo={sdo} num={percItem} strokeWidth={5} />
        );
      })}
    </div>
  );
}

export default ChartUpper;
