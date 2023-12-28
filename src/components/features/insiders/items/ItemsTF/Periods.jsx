import { useDispatch, useSelector } from "react-redux";
import { switchFilterPeriod } from "../../insidersSlice";
import Select1 from "../../../../../ui/selects/Select1";

function Periods() {
  const { filterPeriod } = useSelector((state) => state.insiders);
  const dispatch = useDispatch();

  function handlePeriodChange(e) {
    e.preventDefault();
    dispatch(switchFilterPeriod(e.target.value));
  }

  return (
    <div className="flex items-center justify-center gap-1 w-full">
      <p className="w-1/3 text-sm text-blue-950">Datetime:</p>
      <Select1
        value={filterPeriod}
        type="transactFilt"
        onChange={(e) => handlePeriodChange(e)}
      >
        <option value="last-30-days">Last 30 Days</option>
        <option value="last-3-months">Last 3 Months</option>
        <option value="last-6-months">Last 6 Months</option>
        <option value="last-12-months">Last 12 Months</option>
        <option value="last-2-years">Last 2 Years</option>
      </Select1>
    </div>
  );
}

export default Periods;
