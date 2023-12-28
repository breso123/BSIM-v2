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
import Button1 from "../../../../ui/buttons/Button1";
import FilterIT from "./ItemsTF/FilterIT";
import { periodFilter, sharesFilter } from "./ItemsTF/OptionsIT";

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
      <FilterIT item={filterPos} string="Position" handler={switchFilterPos}>
        {positions.map((p, i) => (
          <option key={i} value={p}>
            {p}
          </option>
        ))}
      </FilterIT>
      <FilterIT
        item={filterShares}
        string="Shares"
        handler={switchFilterShares}
      >
        {sharesFilter.map((sh, i) => (
          <option key={i} value={sh[0]}>
            {sh[1]}
          </option>
        ))}
      </FilterIT>
      <FilterIT
        value={filterPeriod}
        string="Datetime"
        handler={switchFilterPeriod}
      >
        {periodFilter.map((per, i) => (
          <option key={i} value={per}>
            {per
              .split("-")
              .map((p) => p[0].toUpperCase() + p.slice(1))
              .join(" ")}
          </option>
        ))}
      </FilterIT>
      <Button1 type="insidersApply">Apply</Button1>
      <Button1 type="insidersShowAll" onClick={(e) => handleReset(e)}>
        Show All
      </Button1>
    </Form>
  );
}

export default TransactionForm;
