/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import ScenarioHeader from "./formMain/ScenarioHeader";
import IdeaFormMain from "./formMain/IdeaFormMain";
import FormChart from "./formMain/FormChart";

function FormMain({ vals, allValues, length, actual }) {
  const { lcDisplay } = useSelector((state) => state.newIdea);
  const cagr =
    Math.pow(
      allValues[allValues.length - 1].value / actual[actual.length - 1].value,
      1 / 9
    ) - 1;

  return (
    <div
      className={`w-[90%] h-[90%] flex flex-col items-center justify-center gap-2 relative`}
    >
      {lcDisplay === "Setup" && <ScenarioHeader desc="Scenario" />}
      {lcDisplay === "Setup" ? (
        <IdeaFormMain vals={vals} actual={actual} />
      ) : (
        <FormChart allValues={allValues} length={length} cagr={cagr} />
      )}
    </div>
  );
}

export default FormMain;
