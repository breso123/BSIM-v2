/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import ScenarioLegend from "./formChart/ScenarioLegend";
import IdeaBarChart from "./formChart/IdeaBarChart";
import CtrlBtns from "../formItems/CtrlBtns";

function FormChart({ allValues, length, cagr }) {
  const { selectedIdea } = useSelector((state) => state.newIdea);
  const si = selectedIdea[0].toUpperCase() + selectedIdea.slice(1);
  const scenarios = ["Optimistic", "Realistic", "Pessimistic"];

  return (
    <div className="w-full h-[70%] flex flex-col justify-end py-2">
      <div className="w-full h-[8%] absolute top-2 flex items-center justify-between">
        <ScenarioLegend />
        <CtrlBtns arr={scenarios} item={si} type="sc" />
      </div>
      <IdeaBarChart allValues={allValues} cagr={cagr} si={si} length={length} />
    </div>
  );
}

export default FormChart;
