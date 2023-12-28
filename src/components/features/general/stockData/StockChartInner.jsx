/* eslint-disable react/prop-types */

import ExpandSVG from "../../../../ui/ExpandSVG";
import ButtonChartType from "../../../../ui/buttons/ButtonChartType";

function StockChartController() {
  return (
    <div className="flex items-center justify-center w-96 h-14 gap-4 absolute top-[-24%] left-[50%] translate-x-[-50%] bg-sky-100/50 rounded-full shadow-priceBox pl-4">
      <button className="flex items-center gap-2 w-[70%] group">
        <span>
          <ExpandSVG />
        </span>
        <span className="text-[0.95rem] text-blue-950 font-mono group-hover:italic group-hover:font-semibold">
          Technical Analysis
        </span>
      </button>
      <div className="flex items-center gap-4 w-[30%]">
        <ButtonChartType type="area" />
        <ButtonChartType type="candle" />
      </div>
    </div>
  );
}

export default StockChartController;
