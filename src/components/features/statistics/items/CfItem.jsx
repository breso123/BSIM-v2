import { formatInterface2 } from "../../../../helpers/formatters";

/* eslint-disable react/prop-types */
function CfItem({ d, col, tgtIndex, i }) {
  return (
    <div
      style={{ boxShadow: tgtIndex === i ? "inset 0 0 5px midnightblue" : "" }}
      className="flex w-full items-center pl-1 rounded-full"
    >
      <div className="flex items-center justify-start gap-4 text-sm w-[50%]">
        <div className={`h-2.5 w-2.5 ${col} rounded-full`}></div>
        <p className="font-sans">{d.item}</p>
      </div>
      <p className="text-indigo-950 font-bold text-sm text-center w-[25%]">
        {formatInterface2(d.value, true)}
      </p>
      <p className="text-indigo-950 font-bold text-sm text-center w-[25%]">
        {d.coverage.toFixed(2)}
      </p>
    </div>
  );
}

export default CfItem;
