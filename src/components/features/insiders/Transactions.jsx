import Transaction from "./Transaction";
import TransactionsMain from "./TransactionsMain";
import TransactionFilter from "./items/TransactionFilter";
import TransactionTable from "./items/TransactionTable";

function Transactions() {
  const headerOpts = {
    type: "header",
    name: "Insider Name",
    pos: "Position",
    shares: "Shares",
    value: "Value",
    description: "Description",
    date: "Date",
    isDirect: "Dir / Ind",
  };

  return (
    <div className="w-full flex flex-col gap-y-2 items-center justify-items-center h-[38rem] overflow-scroll py-1">
      <div className="w-full flex items-center justify-center divide-x divide-blue-950/50 mb-6">
        <TransactionTable />
        <TransactionFilter />
      </div>
      <Transaction options={headerOpts} />
      <TransactionsMain />
    </div>
  );
}

export default Transactions;
