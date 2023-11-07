/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import ScenarioForm from "../../formItems/ScenarioForm";
import { switchSelectedIdea } from "../../../../newIdeaSlice";

function CustomInputs({ vals }) {
  const dispatch = useDispatch();

  function handleSelectScenario(val) {
    dispatch(switchSelectedIdea(val));
  }

  return (
    <div className="w-full grid grid-cols-1 mb-4">
      {["optimistic", "realistic", "pessimistic"].map((sc, i) => (
        <ScenarioForm
          key={i}
          type={sc}
          vals={vals}
          onClick={() => handleSelectScenario(sc)}
        />
      ))}
    </div>
  );
}

export default CustomInputs;
