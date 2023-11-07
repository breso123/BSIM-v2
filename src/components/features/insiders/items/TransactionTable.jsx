import { useDispatch, useSelector } from "react-redux";
import { switchPeriodRangeTable } from "../insidersSlice";
import TableItem from "./ItemsTF/TableItem";

function TransactionTable() {
  const dispatch = useDispatch();
  const { executiveSummation } = useSelector((state) => state.insiders);

  function handleChange(e) {
    e.preventDefault();
    dispatch(switchPeriodRangeTable(e.target.value));
  }

  return (
    <div className="w-[35%] h-36 pr-8 my-8 grid grid-cols-2 relative ">
      <div className="w-full flex flex-col items-start justify-around text-left">
        <p className="pl-2 border-b-2 border-blue-950/75 w-full font-semibold italic tracking-wide text-indigo-900">
          Position
        </p>
        <p className="pl-2 text-sm text-blue-950">Chief Executive Officer</p>
        <p className="pl-2 text-sm text-blue-950">Chief Financial Officer</p>
        <p className="pl-2 text-sm text-blue-950">Other Executives</p>
      </div>
      <div className="grid grid-cols-2 w-full items-center justify-items-center">
        <TableItem header="Bought" type="Buy" col="text-blue-700" />
        <TableItem header="Sold" type="Sale" col="text-orange-700" />
      </div>
      <select
        onChange={(e) => handleChange(e)}
        className="absolute top-[-35px] bg-white/5 left-1/2 translate-x-[-50%] border border-blue-950 text-blue-950 font-sans rounded-xl px-1 italic"
        value={executiveSummation}
      >
        <option value="all">All</option>
        <option value="last-30-days">Last 30 Days</option>
        <option value="last-3-months">Last 3 Months</option>
        <option value="last-6-months">Last 6 Months</option>
        <option value="last-12-months">Last 12 Months</option>
        <option value="last-2-years">Last 2 Years</option>
      </select>
    </div>
  );
}

export default TransactionTable;
