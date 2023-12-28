import { formatInterface2 } from "../../../../../helpers/formatters";

/* eslint-disable react/prop-types */
function DcfTableMain({ values }) {
  return (
    <div className="w-full h-[90%] px-2 flex flex-col items-center justify-between overflow-scroll">
      {values.map((fc, i, arr) => {
        const waccFX = fc.wacc * 100;
        const period = i === arr.length - 1 ? "TVA" : fc.period;
        const val = formatInterface2(Math.trunc(fc.value), true);
        const valDS = formatInterface2(Math.trunc(fc.discounted), true);

        return (
          <div
            key={i}
            className={`w-full flex gap-4 px-2 hover:shadow-hoverFins py-1 rounded-full ${
              i === arr.length - 1 ? "font-semibold text-sm" : "text-xs"
            }`}
          >
            <p className="w-1/4">{period}</p>
            <p className="w-1/4">{val}</p>
            <p className="w-1/4">{waccFX.toFixed(2)}</p>
            <p className="w-1/4">{valDS}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DcfTableMain;
