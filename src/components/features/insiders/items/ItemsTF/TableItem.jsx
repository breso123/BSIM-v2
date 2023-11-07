/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { checkDateInRanges } from "../../../../../helpers/miscFuncs";
import { formatInterface2 } from "../../../../../helpers/formatters";

function TableItem({ type, header, col }) {
  const { transactions, executiveSummation } = useSelector(
    (state) => state.insiders
  );
  const exFiltered = transactions.filter((tr) => {
    const trType = tr.description.split(" ")[0] === type;
    if (executiveSummation === "all") return trType;
    else
      return checkDateInRanges(tr.date_reported, executiveSummation) && trType;
  });

  function filterByPos(position) {
    if (!position)
      return exFiltered
        .filter(
          (tr) =>
            tr.position !== "Chief Financial Officer" &&
            tr.position !== "Chief Executive Officer"
        )
        .map((tr) => tr.shares)
        .reduce((tr, acc) => tr + acc, 0);
    else
      return exFiltered
        .filter((tr) => tr.position === position)
        .map((tr) => tr.shares)
        .reduce((tr, acc) => tr + acc, 0);
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-around">
      <p className="border-b-2 border-blue-950/75 text-blue-950 font-semibold italic font-serif w-full text-center">
        {header}
      </p>
      <p className={`w-full text-center text-sm font-semibold ${col}`}>
        {formatInterface2(filterByPos("Chief Executive Officer"), true)}
      </p>
      <p className={`w-full text-center text-sm font-semibold ${col}`}>
        {formatInterface2(filterByPos("Chief Financial Officer"), true)}
      </p>
      <p className={`w-full text-center text-sm font-semibold ${col}`}>
        {formatInterface2(filterByPos(null), true)}
      </p>
    </div>
  );
}

export default TableItem;
