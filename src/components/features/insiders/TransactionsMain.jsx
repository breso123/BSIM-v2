import { useSelector } from "react-redux";
import { formatInterface2 } from "../../../helpers/formatters";
import Transaction from "./Transaction";

/* eslint-disable react/prop-types */
function TransactionsMain() {
  const { transactionsF, transactions, areTransactionsFiltered } = useSelector(
    (state) => state.insiders
  );
  const transactionsCurrent = areTransactionsFiltered
    ? transactionsF
    : transactions;

  return (
    <div className="w-full flex flex-col gap-2 items-center justify-start py-1 mt-3 max-h-[32.5rem] overflow-scroll">
      {transactionsCurrent?.map((t, i) => {
        const itemOpts = {
          type: "item",
          name: t.full_name,
          pos: t.position,
          shares: formatInterface2(t.shares, true),
          value: formatInterface2(t.value, true),
          description: t.description,
          date: t.date_reported,
          isDirect: t.is_direct ? "DIRECT" : "INDIRECT",
        };
        return <Transaction key={i} options={itemOpts} />;
      })}
    </div>
  );
}

export default TransactionsMain;
