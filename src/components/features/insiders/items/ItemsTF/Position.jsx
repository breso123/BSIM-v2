/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { switchFilterPos } from "../../insidersSlice";

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
      <select
        className=" bg-white/5 w-2/3 border border-blue-950 text-blue-950 font-sans rounded-xl text-sm px-3 italic"
        value={filterPos}
        onChange={(e) => handlePosChange(e)}
      >
        {positions.map((p, i) => (
          <option key={i} value={p}>
            {p}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Position;
