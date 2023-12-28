/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import useTripleLine from "../../../../../../../chartHooks/useTripleLine";
import useStockModifier from "../../../../../../general/returns/useStockModifier";
import { getLineData, mapToPers } from "../../../../../helpers/newIdeaMisc";

function LineChartMain({ item, values, idea }) {
  const { stockMax } = useSelector((state) => state.general);
  const { yearlyData } = useStockModifier(stockMax.values);
  const { optimistic, realistic, pessimistic } = idea;
  const prices = yearlyData
    .map((d) => d.close)
    .slice(1, 10)
    .reverse();

  const valsWithPrice = values.map((val, i) => {
    return { ...val, price: prices[i] };
  });

  const line = useTripleLine(
    getLineData(item, optimistic, valsWithPrice),
    getLineData(item, realistic, valsWithPrice),
    getLineData(item, pessimistic, valsWithPrice),
    item === "fairVal"
      ? mapToPers(realistic.values.slice(0, -1))
      : [
          ...mapToPers(values, item),
          ...mapToPers(realistic.values.slice(0, -1)),
        ],
    item
  );

  return (
    <div
      className="self-center mt-2 flex items-center justify-center"
      ref={line}
    ></div>
  );
}

export default LineChartMain;
