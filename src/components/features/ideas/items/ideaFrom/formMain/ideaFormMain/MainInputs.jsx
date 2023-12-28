/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import ScenarioForm from "../../formItems/ScenarioForm";
import ScenarioHeader from "../ScenarioHeader";
import { useParams } from "react-router-dom";
import { switchSelectedIdea } from "../../../../newIdeaSlice";
import Error from "../../formItems/Error";

function MainInputs({ vals, newIdea }) {
  const { ideasKey } = useParams();
  const dispatch = useDispatch();

  const tgtErrors =
    ideasKey === "discounted_cf"
      ? { ...newIdea.errorsDCF, ...newIdea.errorsInput }
      : { ...newIdea.errorCOE, ...newIdea.errorsInput };

  function handleSelectScenario(e, val) {
    e.preventDefault();
    dispatch(switchSelectedIdea(val));
  }

  return (
    <div className="w-full border-y border-blue-950 rounded-xl bg-indigo-500/20 mb-6">
      <ScenarioHeader desc="Scenario" />
      {["optimistic", "realistic", "pessimistic"].map((sc, i) => (
        <ScenarioForm
          key={i}
          type={sc}
          vals={vals}
          onClick={(e) => handleSelectScenario(e, sc)}
        />
      ))}
      <Error errors={tgtErrors} />
    </div>
  );
}

export default MainInputs;
