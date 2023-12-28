/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { switchFilterPos } from "../../insidersSlice";
import Select1 from "../../../../../ui/selects/Select1";

function Position({ positions }) {
  const { filterPos } = useSelector((state) => state.insiders);
  const dispatch = useDispatch();
  function handlePosChange(e) {
    e.preventDefault();
    dispatch(switchFilterPos(e.target.value));
  }
  return (
    <div className="flex items-center justify-center gap-2 w-full">
      <p className="w-1/3 text-sm text-blue-950">Position:</p>
      <Select1
        value={filterPos}
        onChange={(e) => handlePosChange(e)}
        type="transactFilt"
      >
        {positions.map((p, i) => (
          <option key={i} value={p}>
            {p}
          </option>
        ))}
      </Select1>
    </div>
  );
}

export default Position;
