import { useDispatch, useSelector } from "react-redux";
import { switchFilterPeriod } from "../../insidersSlice";

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
      <select
        className=" bg-white/5 w-2/3 border border-blue-950 text-blue-950 font-sans rounded-xl px-3 italic"
        value={filterPeriod}
        onChange={(e) => handlePeriodChange(e)}
      >
        <option value="last-30-days">Last 30 Days</option>
        <option value="last-3-months">Last 3 Months</option>
        <option value="last-6-months">Last 6 Months</option>
        <option value="last-12-months">Last 12 Months</option>
        <option value="last-2-years">Last 2 Years</option>
      </select>
    </div>
  );
}

export default Periods;
