import ChartRange from "./stockData/ChartRange";
import useStockChart from "../../chartHooks/useStockChart";
import { useSelector } from "react-redux";

function StockChartCandle() {
  const stockData = useSelector((state) => state.general.stock);
  const chart = useStockChart(stockData?.values);

  return (
    <div className="flex flex-col items-center">
      <div className={`w-full h-1/2`}>{chart}</div>
      <ChartRange />
    </div>
  );
}

export default StockChartCandle;
