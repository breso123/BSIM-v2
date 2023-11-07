import { useDispatch } from "react-redux";
import { setErrors, typeCAGR } from "../../../newIdeaSlice";

/* eslint-disable react/prop-types */
function InputCagr({ value, type, styles }) {
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    dispatch(typeCAGR({ type, value: e.target.value }));
    dispatch(setErrors());
  }

  return (
    <div className="grid grid-cols-1 items-center h-full">
      <input
        value={value}
        placeholder="x.x%"
        onChange={(e) => handleChange(e)}
        className={`h-2/3 w-[15%] rounded-sm bg-white border border-stone-700/75 shadow-statPrice ${styles[type][0]}`}
      />
    </div>
  );
}

export default InputCagr;
