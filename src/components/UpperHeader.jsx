import Button1 from "../ui/buttons/Button1";

/* eslint-disable react/prop-types */
function UpperHeader() {
  return (
    <div className="absolute h-10 w-full top-[-50px] flex items-end justify-between px-12">
      <p className="text-sm text-blue-950">
        Currency:{" "}
        <span className="font-serif tracking-wider font-semibold">USD</span>
      </p>
      <div className="flex items-center justify-center gap-2 text-sm font-semibold">
        <Button1 type="btnBuy">Buy</Button1>
        <Button1 type="btnSell">Sell</Button1>
      </div>
    </div>
  );
}

export default UpperHeader;
