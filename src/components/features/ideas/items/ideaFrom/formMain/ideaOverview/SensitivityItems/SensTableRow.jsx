/* eslint-disable react/prop-types */
import SensTableItem from "./SensTableItem";

function SensTableRow({ idea, sensDisplay, val }) {
  return (
    <div className=" w-24 flex flex-col items-center text-xs tracking-wide">
      {val.map((v, i) => {
        return (
          <SensTableItem idea={idea} sensDisplay={sensDisplay} v={v} key={i} />
        );
      })}
    </div>
  );
}

export default SensTableRow;
