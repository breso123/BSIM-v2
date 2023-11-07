/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import IdeaHeader from "./ideaHeader";
import IdeaOverview from "../ideaFrom/IdeaOverview";

function IdeaArticle() {
  const { scenario, clickedIdea } = useSelector((state) => state.ideas);
  if (!clickedIdea) return;

  const { user, datetime, valuation, title, content } = clickedIdea;
  const styleChartContainer = {
    transform: `translate(-50%, ${clickedIdea !== null ? -50 : -250}%)`,
  };

  return (
    <>
      <div
        style={{ display: clickedIdea ? "block" : "none" }}
        className="h-full w-full blur-[5px] bg-blue-950 absolute top-0 left-0 opacity-50 transition-all duration-300"
      ></div>
      <div
        style={styleChartContainer}
        className="w-[90%] h-[90%]  bg-white rounded-lg absolute top-1/2 left-1/2 transition-all duration-300"
      >
        <IdeaHeader user={user} datetime={datetime} valuation={valuation} />
        <div className="w-full h-[80%] overflow-scroll grid grid-cols-1 px-6 justify-items-center gap-y-4 items-center">
          <IdeaOverview
            idea={clickedIdea}
            scenario={scenario}
            title={title}
            content={content}
            isConfirmed={true}
          />
        </div>
      </div>
    </>
  );
}

export default IdeaArticle;
