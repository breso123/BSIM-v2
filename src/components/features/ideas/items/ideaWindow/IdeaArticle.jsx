/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import IdeaHeader from "./ideaHeader";
import IdeaOverview from "../ideaFrom/IdeaOverview";
import { useParams } from "react-router-dom";
import CommentBar from "./ideaPublishedItems/CommentBar";
import Overlay from "../../../../../ui/Overlay";

function IdeaArticle() {
  const { id } = useParams();
  const { scenario, clickedIdea } = useSelector((state) => state.ideas);
  if (!clickedIdea) return;

  const { user, datetime, valuation, title, content } = clickedIdea;
  const styleChartContainer = {
    transform: `translate(-50%, ${clickedIdea !== null ? -50 : -250}%)`,
  };

  return (
    <>
      <Overlay item={clickedIdea} />
      <div
        style={styleChartContainer}
        className="w-[90%] h-[90%] flex flex-col items-center bg-white rounded-lg absolute top-1/2 left-1/2 transition-all duration-300 z-50"
      >
        <IdeaHeader
          user={user}
          datetime={datetime}
          valuation={valuation}
          idea={clickedIdea}
          id={id}
        />
        <div className="w-full h-[80%] overflow-y-scroll grid grid-cols-1 px-2 justify-items-center gap-y-4 items-center relative">
          <IdeaOverview
            idea={clickedIdea}
            scenario={scenario}
            title={title}
            content={content}
            isConfirmed={true}
          />
        </div>
      </div>
      <CommentBar id={id} />
    </>
  );
}

export default IdeaArticle;
