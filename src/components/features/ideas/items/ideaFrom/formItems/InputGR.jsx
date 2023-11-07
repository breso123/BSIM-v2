import { useDispatch } from "react-redux";
import { setErrors, setValues } from "../../../newIdeaSlice";

/* eslint-disable react/prop-types */
function InputGR({ type, index, styles, value, disabled }) {
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    dispatch(setValues({ type, value: e.target.value, index }));
    dispatch(setErrors());
  }

  return (
    <input
      id={`${type}_${index}`}
      name={`${type}_${index}`}
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
