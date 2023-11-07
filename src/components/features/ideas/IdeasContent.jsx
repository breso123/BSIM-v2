import { useDispatch, useSelector } from "react-redux";
import HeaderStatistics from "../statistics/HeaderStatistics";
import IdeaBox from "./IdeaBox";

import { showNewIdeaForm } from "./ideasSlice";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const paramsFilterKeys = [
  ["discounted_cf", "DCF"],
  ["exit_multiple", "Exit Multiple"],
  ["technicals", "Technicals"],
];

function IdeasContent() {
  const { ideas } = useSelector((state) => state.ideas);
  const { ideasKey } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tgtKey = paramsFilterKeys.find((p) => p[0] === ideasKey)[1];
  const ideasFinal = ideas.filter((idea) => idea.valuation === tgtKey);

  function handleClick(e) {
    e.preventDefault();
    dispatch(showNewIdeaForm());
    navigate("newIdea");
  }

  return (
    <div className="h-full w-[65.9rem] border-t-2 border-l-2 border-solid border-blue-950 px-4 relative">
      <HeaderStatistics />
      <div className="h-[38rem] overflow-scroll grid grid-cols-2 gap-8 py-2 px-6">
        {ideasFinal.map((idea, i) => (
          <IdeaBox key={i} idea={idea} />
        ))}
      </div>
      <div className="flex items-center justify-center absolute top-7 left-1/2 translate-x-[-50%]">
        <button
          onClick={(e) => handleClick(e)}
          className="h-10 w-48 shadow-hoverFins rounded-full text-sm font-semibold font-mono hover:shadow-hoverBtns hover:italic"
        >
          Write a new idea
        </button>
      </div>
      <Outlet />
    </div>
  );
}

export default IdeasContent;
