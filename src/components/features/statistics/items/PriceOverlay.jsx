/* eslint-disable react/prop-types */
import OverlayContent from "./OverlayContent";

function PriceOverlay({ pv }) {
  //const statistics = JSON.parse(localStorage.getItem("statistics"));
  //const pv = statistics["price_and_volume"];

  return (
    <div className="h-12 w-60 absolute top-[2rem] flex items-center justify-center ">
      <div className="h-[90%] w-[80%] transition-all duration-300 flex flex-col justify-center px-2 shadow-statPrice">
        <div className="flex items-center justify-evenly">
          <OverlayContent val={pv?.day_50_ma} />
          <OverlayContent val={pv?.day_200_ma} />
        </div>
        <div className="flex items-center justify-center text-xs">
          <p>Beta: {pv?.beta?.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default PriceOverlay;
