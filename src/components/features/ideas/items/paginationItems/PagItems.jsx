/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { findStylingIOO } from "../../helpers/stringers";
import CardsFV from "../ideaFrom/formMain/ideaOverview/CardsFV";
import ChartIO from "../ideaFrom/formMain/ideaOverview/ChartIO";
import LineChart from "../ideaFrom/formMain/ideaOverview/LineChart";
import Sensitivity from "../ideaFrom/formMain/ideaOverview/Sensitivity";
import Table from "../ideaFrom/formMain/ideaOverview/Table";

function PagItems({ idea, isConfirmed, step, scenario, numOfSteps }) {
  const ideas = useSelector((state) => state.ideas);
  const { selectedIdea } = useSelector((state) => state.newIdea);
  const tgtSC = isConfirmed ? ideas.scenario : selectedIdea;
  const tgtIdea = [...idea.historical, ...idea[tgtSC].values];
  const cagr = idea[tgtSC].cagr;

  return (
    <div className="w-[75%] h-full overflow-hidden">
      <Table
        idea={idea}
        scenario={scenario}
        isConfirmed={isConfirmed}
        translate={`${(1 - step) * 100}%, 0`}
      />
      <ChartIO
        idea={tgtIdea}
        isConfirmed={isConfirmed}
        cagr={cagr}
        valuation={idea.valuation}
        data={findStylingIOO(idea.valuation)}
        translate={`${(2 - step) * 100}%, -100%`}
      />
      <LineChart
        values={idea.historical}
        idea={idea}
        isConfirmed={isConfirmed}
        translate={`${(3 - step) * 100}%, -200%`}
      />
      {idea.valuation === "DCF" && (
        <CardsFV
          idea={idea}
          isConfirmed={isConfirmed}
          translate={`${(4 - step) * 100}%, -${(numOfSteps - 1) * 100}%`}
        />
      )}
      <Sensitivity
        idea={idea}
        translate={`${(numOfSteps + 1 - step) * 100}%, -${numOfSteps * 100}%`}
        isConfirmed={isConfirmed}
      />
    </div>
  );
}

export default PagItems;
