import {
  formatInterface2,
  formatPercentage,
} from "../../../../../../../../helpers/formatters";
import { getMarginStr } from "../../../../../helpers/stringers";

/* eslint-disable react/prop-types */
function ValueBox({ t, valuation }) {
  return (
    <div className=" w-48 rounded-lg shadow-watchList top-[-100px] bg-white z-50 left-0 absolute flex flex-col items-center justify-between gap-2 py-2">
      <p className="text-sm font-mono text-indigo-800 font-semibold italic">
        Fiscal Year: {t.period}
      </p>
      <div className="w-full flex items-center gap-2 text-xs font-sans font-semibold text-blue-900 pl-4">
        <div className="h-2 w-2 rounded-full bg-blue-900"></div>
        <p>Revenue: {formatInterface2(Math.trunc(t.value), true)}</p>
      </div>
      {valuation !== "P/S" && (
        <>
          <div className="w-full flex items-center gap-2 text-xs font-sans font-semibold text-indigo-700 pl-4">
            <div className="h-2 w-2 rounded-full bg-indigo-700"></div>
            <p>
              {getMarginStr(valuation)[0]}:{" "}
              {formatInterface2(Math.trunc(t.item), true)}
            </p>
          </div>
          <div className="w-full flex items-center gap-2 text-xs font-sans font-semibold text-emerald-900 pl-4">
            <div className="h-0.5 w-2 rounded-full bg-emerald-900"></div>
            <p>
              {getMarginStr(valuation)[1]}: {formatPercentage(t.margin)}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ValueBox;
