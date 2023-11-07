/* eslint-disable react/prop-types */
import { formatInterface2 } from "../../../../../helpers/formatters";

function ItemIVPS({ data, type, item }) {
  const ev = data?.dcfSum + data?.fas + data?.cash;
  const eqv = ev - data?.debt - data?.nci;
  const ivps = eqv / data?.shares;
  const checkType = ["ivps", "ev", "eqv"].some((e) => e === type);
  const styles = {
    dcfSum: "text-blue-950 mb-2 font-semibold text-md italic shadow-hoverFins",
    fas: "text-blue-800 text-xs",
    cash: "text-blue-800 text-xs border-b border-blue-950",
    ev: "text-blue-950 text-sm font-semibold mb-1",
    debt: "text-orange-800 text-xs",
    nci: "text-orange-800 text-xs border-b border-orange-800",
    eqv: "text-indigo-700 font-semibold text-sm mb-1",
    shares: "text-xs nb-3",
    ivps: "bg-blue-950 text-sky-100 tracking-wider font-semibold py-2 font-sans text-xs",
  };

  return (
    <div
      className={`w-[70%] flex items-center justify-between px-6 rounded-full ${styles[type]}`}
    >
      <p>{item}</p>
      <p>
        {type === "eqv" && formatInterface2(Math.trunc(eqv), true)}
        {type === "ev" && formatInterface2(Math.trunc(ev), true)}
        {type === "ivps" && ivps.toFixed(2)}
        {!checkType && formatInterface2(Math.trunc(data?.[type]), true)}
      </p>
    </div>
  );
}

export default ItemIVPS;
