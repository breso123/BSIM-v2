/* eslint-disable react/prop-types */
import ItemIVPS from "./ItemIVPS";

const types = [
  ["dcfSum", "DCF Summation"],
  ["fas", "Add: Financial Assets"],
  ["cash", "Add: Cash"],
  ["ev", "Enterprise Value"],
  ["debt", "Less: Debt"],
  ["nci", "Less: PS & Minorities"],
  ["eqv", "Equity Value"],
  ["shares", "Divide by: Shares"],
  ["ivps", "Intrinsic Value per Share"],
];

function TableIVPS({ data }) {
  return (
    <div className="w-full h-64 flex flex-col items-center gap-1 pr-8 justify-center border-r border-blue-950/50">
      {types.map((t, i) => (
        <ItemIVPS key={i} data={data} type={t[0]} item={t[1]} />
      ))}
    </div>
  );
}

export default TableIVPS;
