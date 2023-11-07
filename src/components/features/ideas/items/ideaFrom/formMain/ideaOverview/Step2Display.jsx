/* eslint-disable react/prop-types */
import ScenarioCard from "../../formItems/ScenarioCard";
import ScenarioHeader from "../ScenarioHeader";

function Step2Display({ idea, isConfirmed }) {
  return (
    <div className="w-full flex flex-col gap-6">
      <ScenarioHeader
        desc="Intrinsic Values per Share"
        isConfirmed={isConfirmed}
      />
      <div className="w-full flex gap-7 relative">
        <ScenarioCard idea={idea} scenario="optimistic" />
        <ScenarioCard idea={idea} scenario="realistic" />
        <ScenarioCard idea={idea} scenario="pessimistic" />
      </div>
    </div>
  );
}

export default Step2Display;
