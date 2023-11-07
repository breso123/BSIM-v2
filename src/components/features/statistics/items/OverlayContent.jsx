/* eslint-disable react/prop-types */

function OverlayContent({ val, pv }) {
  //const statistics = JSON.parse(localStorage.getItem("statistics"));
  //const pv = statistics["price_and_volume"];

  const bgColor = {
    backgroundColor: `${val === pv?.day_50_ma ? "midnightblue" : "#4338ca"}`,
  };

  return (
    <div className="flex items-center gap-2">
      <div className="h-3 w-3 rounded-sm bg-blue-950" style={bgColor}></div>
      <p className="text-[13px]">{val?.toFixed(2)}</p>
    </div>
  );
}

export default OverlayContent;
