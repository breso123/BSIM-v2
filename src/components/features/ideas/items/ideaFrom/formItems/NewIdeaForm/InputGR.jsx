import { useDispatch, useSelector } from "react-redux";
import {
  setErrorDbtEb,
  setErrorEbmg,
  setErrorMulti,
  setErrorShares,
  setErrorsInput,
  setScenarioArray,
  setValues,
} from "../../../../newIdeaSlice";
import { useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
function InputGR({ type, index, styles, value, disabled }) {
  const dispatch = useDispatch();
  const { ideasKey } = useParams();
  const { multipleVal } = useSelector((state) => state.newIdea);

  function handleChange(e) {
    e.preventDefault();
    dispatch(setValues({ type, value: e.target.value, index }));
    dispatch(setScenarioArray(type));
    dispatch(setErrorsInput());
    dispatch(setErrorEbmg());
    ideasKey === "exit_multiple" && dispatch(setErrorShares());
    ideasKey === "exit_multiple" && dispatch(setErrorMulti());
    multipleVal === "EV/EBITDA" && dispatch(setErrorDbtEb());
  }

  return (
    <input
      value={value}
      onChange={(e) => handleChange(e)}
      disabled={disabled}
      type="text"
      placeholder="x.x%"
      className={`h-2/3 text-xs pl-1 pt-0.5 w-[80%] rounded-sm bg-white border border-stone-700/75 shadow-statPrice ${styles}`}
    />
  );
}

export default InputGR;
