import { itemStringed } from "../../../../helpers/formatters";

/* eslint-disable react/prop-types */
function Revisions({ tgtRev }) {
  const items = [
    "Up Last Week",
    "Down Last Week",
    "Up Last Month",
    "Down Last Month",
  ];
  const itemVals = items.map((item) => itemStringed(item));

  return (
    <div className="w-1/2 flex flex-col items-center justify-center text-sm gap-1">
      <p className="font-semibold text-indigo-950/80 text-[1rem] mb-3 font-mono">
        Period: {tgtRev.date.replaceAll("-", "/")}
      </p>
      {items.map((item, i) => (
        <p
          key={i}
          className="w-2/3 flex items-center justify-between text-blue-900"
        >
          <span className="italic drop-shadow-gridderInd">{item}:</span>
          <span className="font-semibold">{tgtRev[itemVals[i]]}</span>
        </p>
      ))}
    </div>
  );
}

export default Revisions;
