/* eslint-disable react/prop-types */

import { formatInterface2 } from "../../../../../../helpers/formatters";

const items = [
  [
    "value",
    "Free Cash Flow",
    (period) => formatInterface2(Math.trunc(period.value)),
  ],
  [
    "discounted",
    "Discounted CF",
    (period) => formatInterface2(Math.trunc(period.discounted)),
  ],
  ["wacc", "W.A.C.C. (%)", (period) => (period.wacc * 100).toFixed(1)],
  ["total", "DCF Summation", (sum) => formatInterface2(Math.trunc(sum), true)],
  ["cash", "Add: Cash", (sum) => formatInterface2(sum, true)],
  ["fas", "Add: Financial Assets", (sum) => formatInterface2(sum, true)],
  ["debt", "Less: Debt", (sum) => formatInterface2(sum, true)],
  ["nci", "Less: NC Interests", (sum) => formatInterface2(sum, true)],
  ["eqv", "Equity Value", (sum) => formatInterface2(sum, true)],
  ["shares", "Divide by: Shares", (sum) => formatInterface2(sum, true)],
  ["ivps", "Intrinsic Value per Share", (sum) => sum.toFixed(2)],
  ["periods", "Period", (period) => period.period],
];

function TableRow({ vals, item, dcfSum = null }) {
  const tgtItem = items.find((itm) => itm[0] === item);
  const checkCol1 = [
    "total",
    "cash",
    "fas",
    "debt",
    "nci",
    "eqv",
    "shares",
    "ivps",
  ].some((itm) => item === itm);
  const cols = checkCol1 ? "1" : "9";

  return (
    <div
      style={{ gridTemplateColumns: "1fr 3fr" }}
      className={`w-full h-${
        item === "total" ? "7" : "6"
      } grid grid-cols-2 items-center pl-3 ${
        !checkCol1 && "border-b border-blue-950/75"
      }  ${item === "wacc" && "italic text-pink-800"} ${
        item === "total" &&
        "text-xl drop-shadow-gridderInd text-indigo-900 h-10 bg-blue-300/10"
      } ${item === "discounted" && "text-blue-950 font-semibold"} ${
        item === "value" && "text-blue-950"
      } ${
        item === "periods" &&
        "border border-blue-950 h-8 bg-blue-950 text-white/75 italic"
      } ${
        item === "eqv" &&
        "bg-indigo-200 rounded-sm h-9 text-blue-950 font-semibold tracking-wider border-t-2 border-blue-950/50"
      } ${item === "shares" && "h-9 text-orange-700 font-semibold italic"} ${
        item === "ivps" &&
        "bg-indigo-900 h-8 text-indigo-200 font-semibold rounded-lg"
      }`}
    >
      <div
        className={`w-full h-full flex items-center justify-start text-sm border-r border-blue-950/50`}
      >
        <p>{tgtItem[1]}</p>
      </div>
      <div
        className={`w-full h-full items-center text-xs grid grid-cols-${cols}`}
      >
        {!checkCol1 ? (
          vals.map((period, i, arr) => (
            <p
              className={`w-full h-full flex items-center justify-center text-center tracking-wider ${
                i !== arr.length - 1 && "border-r border-blue-950/50"
              } `}
              key={i}
            >
              {tgtItem[2](period)}
            </p>
          ))
        ) : (
          <p
            className={`w-full  ${
              item === "total"
                ? "drop-shadow-gridderInd pr-3 text-indigo-800 text-[1rem]"
                : "text-sm pr-4 italic"
            }  text-right`}
          >
            {tgtItem[2](dcfSum)}
          </p>
        )}
      </div>
    </div>
  );
}

export default TableRow;
