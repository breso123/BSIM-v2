import { useDispatch, useSelector } from "react-redux";
import { switchFilterShares } from "../../insidersSlice";

function Shares() {
  const { filterShares } = useSelector((state) => state.insiders);
  const dispatch = useDispatch();

  function handleSharesChange(e) {
    e.preventDefault();
    dispatch(switchFilterShares(e.target.value));
  }
  return (
    <div className="flex items-center justify-center gap-1 w-full">
      <p className="w-1/3 text-sm text-blue-950">Shares:</p>
      <select
        className=" bg-white/5 w-2/3 border border-blue-950 text-blue-950 font-sans rounded-xl text-sm px-3 italic"
        value={filterShares}
        onChange={(e) => handleSharesChange(e)}
      >
        <option value="less-than-20000">{"< 20k"}</option>
        <option value="20000-50000">{"20k - 50k"}</option>
        <option value="50000-100000">{"50k - 100k"}</option>
        <option value="100000-200000">{"100k - 200k"}</option>
        <option value="greater-than-200000">{"> 200k"}</option>
      </select>
    </div>
  );
}

export default Shares;
