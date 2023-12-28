/* eslint-disable react/prop-types */
import SectionTC from "./formMain/ideaOverview/SectionTC";
import Confirmation from "./formMain/ideaOverview/Confirmation";
import IdeaPagination from "../IdeaPagination";
import { useState } from "react";
import TableEVA from "./formMain/ideaOverview/TableEVA";
import Button1 from "../../../../../ui/buttons/Button1";

function IdeaOverview({ idea, scenario, isConfirmed }) {
  const [activeEVA, setActiveEVA] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setActiveEVA((activeEVA) => !activeEVA);
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-start py-6 mb-4 overflow-scroll">
      <IdeaPagination
        scenario={scenario}
        idea={idea}
        isConfirmed={isConfirmed}
      />

      <SectionTC title={idea.title} content={idea.content} />
      {!isConfirmed && <Confirmation />}
      {activeEVA && <TableEVA idea={idea} />}
      {isConfirmed && (
        <Button1 type="eva" onClick={(e) => handleClick(e)}>
          {activeEVA ? "Hide" : "Show"} Actual vs Estimate
        </Button1>
      )}
    </div>
  );
}

export default IdeaOverview;
