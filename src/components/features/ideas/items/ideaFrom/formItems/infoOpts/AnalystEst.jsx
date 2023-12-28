import { useSelector } from "react-redux";
import { formatPercentage } from "../../../../../../../helpers/formatters";

function AnalystEst() {
  const { estimates } = useSelector((state) => state.analysis);
  const { growth } = estimates;
  return (
    <div className="w-[60%] flex items-center justify-center mb-2 gap-6 divide-x divide-blue-950/50">
      <span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5726/5726778.png"
          className="h-[4rem] w-[10rem]"
        />
      </span>
      <p className="text-sm text-justify px-3">
        Analysts forecasted <b>{formatPercentage(growth?.next_year)} </b>
        growth for this year and CAGR of
        <b> {formatPercentage(growth?.next_5_years_pa)}</b> for the next five
        years.
      </p>
    </div>
  );
}

export default AnalystEst;
