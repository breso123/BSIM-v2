import { formatInterface2 } from "../../../../../helpers/formatters";
import GridderCnt from "./GridderCnt";

/* eslint-disable react/prop-types */
function GridderDCF({ data, item, type }) {
  const styles = {
    header: "bg-blue-950 text-white/75 mb-2 font-semibold font-mono text-xs",
    dcf: "border-b-2 border-blue-900 my-2 font-semibold text-blue-950 font-sans",
    total: "font-serif font-semibold text-blue-950 mt-1",
    wacc: "text-fuchsia-800 italic font-sans",
    basic: " font-sans",
  };

  return (
    <div
      className={`w-full h-7 flex items-center text-sm rounded-full ${styles[type]}`}
    >
      <p className={"w-[25%] pl-3"}>{item}</p>
      {type === "total" ? (
        <p className="w-[75%] grid grid-cols-1 px-3 pr-4 text-lg drop-shadow-gridderBld">
          {formatInterface2(
            Math.trunc(
              data
                ?.map((val) => val.discounted)
                .reduce((val, acc) => val + acc, 0)
            ),
            true
          )}
        </p>
      ) : (
        <GridderCnt data={data} type={type} />
      )}
    </div>
  );
}

export default GridderDCF;
