/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { setClickedIdea, switchScenario } from "../../ideasSlice";
import { useNavigate } from "react-router-dom";

function IdeaHeader({ user, datetime, valuation }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    dispatch(setClickedIdea(null));
    dispatch(switchScenario("optimistic"));
    navigate(-1);
  }

  return (
    <div className="w-full h-[10%] mb-8 px-16 flex items-center justify-between bg-indigo-200/50 shadow-hoverFins">
      <div className="flex flex-col items-start justify-center gap-2">
        <p className="text-sm font-semibold text-blue-950">{user}</p>
        <p className="text-xs italic tracking-wider">{datetime}</p>
      </div>
      <p className="italic text-indigo-800 font-semibold">
        Valuation: {valuation}
      </p>
      <button
        onClick={(e) => handleClick(e)}
        className="h-6 w-6 rounded-full bg-blue-950 text-white text-sm absolute top-2 right-2"
      >
        X
      </button>
    </div>
  );
}

export default IdeaHeader;
