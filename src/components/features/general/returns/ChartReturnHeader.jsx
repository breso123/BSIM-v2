import { useSelector } from "react-redux";
import ChartReturnData from "./ChartReturnData";
import ButtonClose from "../../../../ui/buttons/ButtonClose";
import Select1 from "../../../../ui/selects/Select1";

/* eslint-disable react/prop-types */
function ChartReturnHeader({
  yearlyData,
  onSetChartOpen,
  period,
  onSetPeriod,
}) {
  const monthlyReturn = useSelector((state) => state.general.monthlyReturn);
  return (
    <div className="h-[10%] w-full flex items-center justify-between  mb-10 p-1 relative">
      <div className="flex items-center justify-start gap-6">
        <p
          style={{ textShadow: "2px 2px 5px rgba(25, 25, 112, 0.5)" }}
          className="text-xl text-indigo-900 font-semibold tracking-wide font-sans"
        >
          Performance by Month (%)
        </p>
        <Select1
          value={period}
          onChange={(e) => onSetPeriod(+e.target.value)}
          type="perSelect"
        >
          {yearlyData.map((d, i) => (
            <option key={i} value={d.period}>
              {d.period}
            </option>
          ))}
        </Select1>
      </div>
      {monthlyReturn && <ChartReturnData data={monthlyReturn} />}
      <ButtonClose onClick={() => onSetChartOpen(false)} />
    </div>
  );
}

export default ChartReturnHeader;
