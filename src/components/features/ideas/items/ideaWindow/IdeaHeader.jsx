/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { setClickedIdea, switchScenario } from "../../ideasSlice";
import { useNavigate } from "react-router-dom";
import LikeComment from "./ideaPublishedItems/LikeComment";
import { formatDate } from "../../../../../helpers/formatters";
import ButtonClose from "../../../../../ui/buttons/ButtonClose";

function IdeaHeader({ user, datetime, valuation, idea, id }) {
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
        <p className="text-xs italic tracking-wider">{formatDate(datetime)}</p>
      </div>
      <LikeComment idea={idea} id={id} />
      <p className="italic text-indigo-800 font-semibold">
        Valuation: {valuation}
      </p>
      <ButtonClose onClick={(e) => handleClick(e)} />
    </div>
  );
}

export default IdeaHeader;
