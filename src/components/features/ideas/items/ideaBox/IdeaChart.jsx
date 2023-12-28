/* eslint-disable react/prop-types */

import useTripleLine from "../../../../chartHooks/useTripleLine";

function IdeaChart({ idea }) {
  const { optimistic, realistic, pessimistic } = idea;

  function mapToFV(arr) {
    return arr.values.map((ar) => ar.fairVal);
  }

  const line = useTripleLine(
    mapToFV(optimistic),
    mapToFV(realistic),
    mapToFV(pessimistic),
    realistic.values.map((v) => v.period),
    "fairVal",
    true
  );
  return (
    <div ref={line} className="w-full h-1/2 bg-blue-100/30 rounded-xl"></div>
  );
}

export default IdeaChart;
