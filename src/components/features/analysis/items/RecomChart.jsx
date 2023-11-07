/* eslint-disable react/prop-types */
import useDonut from "../../../chartHooks/useDonut";

function RecomChart({ data }) {
  const chartRef = useDonut(
    data,
    ["#172554", "#0c4a6e", "#4c1d95", "#9a3412", "#b91c1c"],
    ["Strong Buy", "Buy", "Hold", "Sell", "Strong Sell"],
    450
  );
  return <div className="absolute top-0 left-[45%]" ref={chartRef}></div>;
}

export default RecomChart;
