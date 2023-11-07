/* eslint-disable react/prop-types */
function UpperHeader() {
  return (
    <div className="absolute h-10 w-full top-[-50px] flex items-end justify-between px-12">
      <p className="text-sm text-blue-950">
        Currency:{" "}
        <span className="font-serif tracking-wider font-semibold">USD</span>
      </p>
      <div className="flex items-center justify-center gap-2 text-sm font-semibold">
        <button
          style={{ boxShadow: "inset 0 0 5px lightskyblue" }}
          className="h-10 w-[5rem] bg-blue-900 rounded-full text-sky-200"
        >
          Buy
        </button>
        <button
          style={{ boxShadow: "inset 0 0 5px yellow" }}
          className="h-10 w-[5rem] bg-orange-700 rounded-full text-red-100"
        >
          Sell
        </button>
      </div>
    </div>
  );
}

export default UpperHeader;
