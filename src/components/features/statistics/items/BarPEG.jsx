/* eslint-disable react/prop-types */
import ItemPEG from "./ItemPEG";

function BarPEG({ src, peg }) {
  return (
    <div className="h-4 w-2/3 shadow-buttons self-center relative text-xs">
      <div className="h-full w-3 bg-blue-700/80 rounded-l-full absolute  left-[-2%]">
        <p className="mt-8 ml-1.5">0</p>
      </div>
      <div className="h-full w-0.5 bg-blue-950/75 rounded-full absolute left-[20%]">
        <p className="mt-8 ml-[-2px]">1</p>
      </div>
      <div className="h-full w-0.5 bg-blue-950/75 rounded-full absolute left-[40%]">
        <p className="mt-8 ml-[-2px]">2</p>
      </div>
      <div className="h-full w-0.5 bg-blue-950/75 rounded-full absolute left-[60%]">
        <p className="mt-8 ml-[-2px]">3</p>
      </div>
      <div className="h-full w-0.5 bg-blue-950/75 rounded-full absolute left-[80%]">
        <p className="mt-8 ml-[-2px]">4</p>
      </div>
      <div className="h-full w-3 bg-red-600/50 rounded-r-full absolute  left-[100%]">
        <p className="mt-8 ">5</p>
      </div>
      <ItemPEG src={src} peg={peg} />
    </div>
  );
}

export default BarPEG;
