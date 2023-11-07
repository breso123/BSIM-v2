import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import {
  setSubmittedTransactions,
  showAll,
  switchFilterPeriod,
  switchFilterPos,
  switchFilterShares,
} from "../insidersSlice";
import { checkDateInRanges, determineLBG } from "../../../../helpers/miscFuncs";
import Select from "./ItemsTF/Select";

function TransactionForm() {
  const { filterPos, filterShares, filterPeriod, transactions } = useSelector(
    (state) => state.insiders
  );
  const dispatch = useDispatch();
  const positions = [...new Set(transactions.map((tr) => tr.position))];
  const numShares = filterShares.split("-").filter((sh) => !isNaN(+sh));
  const transactionsFiltered = transactions.filter(
    (tr) =>
      tr.position === filterPos &&
      determineLBG(numShares, tr.shares) &&
      checkDateInRanges(tr.date_reported, filterPeriod)
  );

  function handlePosChange(e) {
    e.preventDefault();
    dispatch(switchFilterPos(e.target.value));
  }

  function handleSharesChange(e) {
    e.preventDefault();
    dispatch(switchFilterShares(e.target.value));
  }

  function handlePeriodChange(e) {
    e.preventDefault();
    dispatch(switchFilterPeriod(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setSubmittedTransactions(transactionsFiltered));
  }

  function handleReset(e) {
    e.preventDefault();
    dispatch(showAll());
  }

  return (
    <Form
      onSubmit={(e) => handleSubmit(e)}
      className="w-full flex flex-col items-center justify-center gap-2 relative"
    >
      <Select
        value={filterPos}
        title="Position"
        onChange={(e) => handlePosChange(e)}
      >
        {positions.map((p, i) => (
          <option key={i} value={p}>
            {p}
          </option>
        ))}
      </Select>

      <Select
        value={filterShares}
        title="Shares"
        onChange={(e) => handleSharesChange(e)}
      >
        <option value="less-than-20000">{"< 20k"}</option>
        <option value="20000-50000">{"20k - 50k"}</option>
        <option value="50000-100000">{"50k - 100k"}</option>
        <option value="100000-200000">{"100k - 200k"}</option>
        <option value="greater-than-200000">{"> 200k"}</option>
      </Select>

      <Select
        value={filterPeriod}
        title="Datetime"
        onChange={(e) => handlePeriodChange(e)}
      >
        <option value="last-30-days">Last 30 Days</option>
        <option value="last-3-months">Last 3 Months</option>
        <option value="last-6-months">Last 6 Months</option>
        <option value="last-12-months">Last 12 Months</option>
        <option value="last-2-years">Last 2 Years</option>
      </Select>

      <button className="h-8 w-24 shadow-hoverFins text-indigo-900 text-sm rounded-full mt-3 hover:font-semibold hover:bg-sky-500/10">
        Apply
      </button>
      <button
        onClick={(e) => handleReset(e)}
        className="absolute top-[-40px] right-0 text-sm text-indigo-700 hover:italic hover:text-blue-950 hover:underline"
      >
        Show All
      </button>
    </Form>
  );
}

export default TransactionForm;
