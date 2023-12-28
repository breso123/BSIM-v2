import { useDispatch, useSelector } from "react-redux";
import {
  setErrorDbtEb,
  setErrorEbmg,
  setErrorMulti,
  setErrorShares,
  setErrorsInput,
  typeCAGR,
} from "../../../../newIdeaSlice";
import { useParams } from "react-router-dom";
import { stylesSF } from "../../../../helpers/tableStyles";

/* eslint-disable react/prop-types */
function InputCagr({ value, type }) {
  const dispatch = useDispatch();
  const { ideasKey } = useParams();
  const { multipleVal } = useSelector((state) => state.newIdea);

  function handleChange(e) {
    e.preventDefault();
    dispatch(typeCAGR({ type, value: e.target.value }));
    dispatch(setErrorsInput());
    dispatch(setErrorEbmg());
    ideasKey === "exit_multiple" && dispatch(setErrorShares());
    ideasKey === "exit_multiple" && dispatch(setErrorMulti());
    multipleVal === "EV/EBITDA" && dispatch(setErrorDbtEb());
  }

  return (
    <div className="grid grid-cols-1 items-center h-full">
      <input
        value={value}
        placeholder="x.x%"
        onChange={(e) => handleChange(e)}
        className={`h-2/3 pl-1 w-[15%] rounded-sm bg-white border border-stone-700/75 shadow-statPrice ${stylesSF[type][0]}`}
      />
    </div>
  );
}

export default InputCagr;
