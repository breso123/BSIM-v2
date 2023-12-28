import { formatPercentage } from "../../../../../../../../helpers/formatters";

/* eslint-disable react/prop-types */
function TableHeaderData({ idea, chDCF }) {
  return (
    <div className="h-6 tracking-wider absolute left-4 bg-slate-200/50 top-2.5 shadow-hoverFins rounded-full flex items-center gap-4 text-[0.70rem] px-4 font-semibold italic">
      <p className="text-fuchsia-700">
        {chDCF ? "WACC" : "Cost of Equity"}:{" "}
        {formatPercentage(idea[chDCF ? "wacc" : "coe"])}
      </p>
      {chDCF && (
        <p className="text-blue-800">T-Growth: {formatPercentage(idea.tg)}</p>
      )}
    </div>
  );
}

export default TableHeaderData;
