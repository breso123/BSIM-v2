import ScenarioCard from "../../formItems/ScenarioCard";
import ScenarioHeader from "../ScenarioHeader";

/* eslint-disable react/prop-types */
function CardsFV({ idea, isConfirmed, translate }) {
  const transform = { transform: `translate(${translate})` };
  return (
    <div
      style={transform}
      className="w-full h-full flex flex-col items-center gap-2 transition-all duration-300"
    >
      <ScenarioHeader
        desc="Intrinsic Values per Share"
        isConfirmed={isConfirmed}
      />
      <div className="w-full flex justify-center gap-7 relative">
        <ScenarioCard idea={idea} scenario="optimistic" />
        <ScenarioCard idea={idea} scenario="realistic" />
        <ScenarioCard idea={idea} scenario="pessimistic" />
      </div>
    </div>
  );
}

export default CardsFV;
