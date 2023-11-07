import {
  formatInterface2,
  formatPercentage,
} from "../../../../helpers/formatters";

/* eslint-disable react/prop-types */
function TableFinsItem({
  shadow,
  itemIndex,
  stat,
  colorG,
  colorM,
  color,
  index,
}) {
  return (
    <div
      style={{ boxShadow: shadow }}
      className={`flex items-center justify-center gap-6 font-serif w-full rounded-full ${
        itemIndex === index ? "italic" : ""
      }`}
    >
      <div
        style={{ backgroundColor: color }}
        className="h-4 w-4 bg-blue-950/75 rounded-full"
      ></div>
      <span className="w-[25%] text-sm">{stat.item}</span>
      <span className="text-indigo-800 font-semibold text-sm w-[15%] text-center">
        {formatInterface2(stat.value, true)}
      </span>
      <span
        className={`text-${
          !stat.growth ? "stone-700" : colorG
        } w-[10%] text-center`}
      >
        {formatPercentage(stat.growth)}
      </span>
      <span
        className={`text-${
          !stat.margin ? "stone-700" : colorM
        } w-[10%] text-center`}
      >
        {formatPercentage(stat.margin)}
      </span>
    </div>
  );
}

export default TableFinsItem;
