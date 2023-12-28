import { useDispatch, useSelector } from "react-redux";
import { switchPeriodRangeTable } from "../insidersSlice";
import TableItem from "./ItemsTF/TableItem";
import Select1 from "../../../../ui/selects/Select1";
import { periodFilter } from "./ItemsTF/OptionsIT";

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
      <Select1
        value={executiveSummation}
        type="transactFiltSum"
        onChange={(e) => handleChange(e)}
      >
        {["all", ...periodFilter].map((p, i) => (
          <option key={i} value={p}>
            {p
              .split("-")
              .map((p) => p[0].toUpperCase() + p.slice(1))
              .join(" ")}
          </option>
        ))}
      </Select1>
    </div>
  );
}

export default TransactionTable;
