/* eslint-disable react/prop-types */
import { stylesCB } from "../../../helpers/tableStyles";
import BtnDC from "./BtnDC";

function CtrlBtns({ arr, item, type }) {
  return (
    <div className={`${stylesCB[type]} relative`}>
      {arr.map((dc, i) => (
        <BtnDC key={i} dc={dc} i={i} ivpsDisplay={item} type={type} />
      ))}
    </div>
  );
}

export default CtrlBtns;
