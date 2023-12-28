import { useDispatch } from "react-redux";
import Select1 from "../../../../../ui/selects/Select1";

/* eslint-disable react/prop-types */
function FilterIT({ item, handler, string, children }) {
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    dispatch(handler(e.target.value));
  }
  return (
    <div className="flex items-center justify-center gap-1 w-full">
      <p className="w-1/3 text-sm text-blue-950">{string}:</p>
      <Select1
        value={item}
        onChange={(e) => handleChange(e)}
        type="transactFilt"
      >
        {children}
      </Select1>
    </div>
  );
}

export default FilterIT;
