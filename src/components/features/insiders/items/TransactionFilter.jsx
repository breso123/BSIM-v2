import TransactionForm from "./TransactionForm";

function TransactionFilter() {
  return (
    <div className="w-[30%] h-48  pl-8 flex flex-col items-center justify-center gap-4">
      <p className="drop-shadow-gridderInd text-blue-900 font-semibold font-serif text-xl">
        Filter by:
      </p>
      <TransactionForm />
    </div>
  );
}

export default TransactionFilter;
