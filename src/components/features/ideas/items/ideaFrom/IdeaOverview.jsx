/* eslint-disable react/prop-types */
import SectionTC from "./formMain/ideaOverview/SectionTC";
import Confirmation from "./formMain/ideaOverview/Confirmation";
import IdeaPagination from "../IdeaPagination";

function IdeaOverview({ idea, title, content, scenario, isConfirmed }) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start gap-14 overflow-scroll py-6 mb-6">
      <IdeaPagination
        scenario={scenario}
        idea={idea}
        isConfirmed={isConfirmed}
      />
      <SectionTC title={title} content={content} />
      {!isConfirmed && <Confirmation />}
    </div>
  );
}

export default IdeaOverview;
