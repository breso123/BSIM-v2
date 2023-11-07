/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { switchTimeFrame } from "../technicalsSlice";

function ButtonTF({ interval }) {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(switchTimeFrame(interval));
  }

  return (
    <button
      onClick={(e) => handleClick(e)}
      className="w-full h-full rounded-xl flex items-center justify-center hover:font-semibold hover:cursor-pointer hover:text-white hover:bg-indigo-800"
    >
      {interval}
    </button>
  );
}

export default ButtonTF;
