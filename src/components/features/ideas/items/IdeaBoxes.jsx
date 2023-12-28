import { useSelector } from "react-redux";
import IdeaBox from "../IdeaBox";
import { useParams } from "react-router-dom";

function IdeaBoxes() {
  const { ideas } = useSelector((state) => state.ideas);
  const { ideasKey } = useParams();

  const ideasFinal = ideas.filter((idea) => {
    if (ideasKey === "discounted_cf") return idea.valuation === "DCF";
    if (ideasKey === "exit_multiple")
      return ["P/E", "P/S", "EV/EBITDA"].some((v) => idea.valuation === v);
    else return "";
  });

  return (
    <div className="h-[38rem] overflow-scroll grid grid-cols-2 gap-8 py-2 px-6">
      {ideasFinal.map((idea, i) => (
        <IdeaBox key={i} idea={idea} />
      ))}
    </div>
  );
}

export default IdeaBoxes;
