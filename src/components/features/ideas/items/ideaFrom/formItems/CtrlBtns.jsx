/* eslint-disable react/prop-types */
import BtnDC from "./BtnDC";

function CtrlBtns({ arr, item, type }) {
  const styles = {
    sc: "h-8 divide-x divide-blue-950/50",
    sc2: "h-8 divide-x divide-blue-950/50",
    disp: "h-[70%] divide-x divide-blue-950/50",
    ivps: "h-6 flex items-center justify-center font-mono divide-x-2 divide-blue-950",
    view: "h-8 divide-x divide-blue-950/50",
  };
  return (
    <div className={`${styles[type]}`}>
      {arr.map((dc, i) => (
        <BtnDC key={i} dc={dc} i={i} ivpsDisplay={item} type={type} />
      ))}
    </div>
  );
}

export default CtrlBtns;
