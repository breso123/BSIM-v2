/* eslint-disable react/prop-types */
import useTripleLine from "../../../../../../chartHooks/useTripleLine";
import ScenarioHeader from "../ScenarioHeader";

const mapToVals = (arr) => arr.map((ar) => ar.value);
const mapToPers = (arr) => arr.map((ar) => ar.period);

function LineChart({ values, idea, isConfirmed }) {
  const { optimistic, realistic, pessimistic } = idea;
  const line = useTripleLine(
    [...mapToVals(values), ...mapToVals(optimistic.values.slice(0, -1))],
    [...mapToVals(values), ...mapToVals(realistic.values.slice(0, -1))],
    [...mapToVals(values), ...mapToVals(pessimistic.values.slice(0, -1))],
    [...mapToPers(values), ...mapToPers(realistic.values.slice(0, -1))]
  );

  return (
    <div className="h-full w-full flex items-center flex-col gap-6">
      <ScenarioHeader desc="Future Cash Flows" isConfirmed={isConfirmed} />
      <div ref={line}></div>
    </div>
  );
}

export default LineChart;
