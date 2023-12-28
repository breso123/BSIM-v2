/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { stylesSC } from "../../../helpers/tableStyles";
import ScenarioCardHeader from "./ScenarioCardItems/ScenarioCardHeader";
import ScenarioCardFooter from "./ScenarioCardItems/ScenarioCardFooter";
import CircleReused from "../../../../../../ui/circle/CircleReused";

function ScenarioCard({ scenario, idea }) {
  const { ivpsDisplay } = useSelector((state) => state.newIdea);
  if (!idea) return;

  const { cp } = idea;
  const { ivps, cagr } = idea[scenario];
  const diff = cp > ivps ? -(cp / ivps - 1) : 1 - cp / ivps;
  const displayed = ivpsDisplay === "Diff" ? diff : cagr;

  return (
    <div
      className={`w-[30%] h-full shadow-statPrice px-4 py-2 ${stylesSC[scenario][0]}`}
    >
      <ScenarioCardHeader scenario={scenario} ivps={ivps} />
      <div className="w-full h-[80%]">
        <CircleReused num={displayed} svgSize={150} strokeWidth={4} sdo={300} />
      </div>
      <ScenarioCardFooter cp={cp} ivps={ivps} />
    </div>
  );
}

export default ScenarioCard;
