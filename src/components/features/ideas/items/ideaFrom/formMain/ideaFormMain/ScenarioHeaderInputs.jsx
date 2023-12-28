import { useDispatch, useSelector } from "react-redux";
import {
  setErrorCOE,
  setErrorsDCF,
  typeCOE,
  typeTG,
  typeWACC,
} from "../../../../newIdeaSlice";
import { useParams } from "react-router-dom";
import InputSCH from "../../formItems/NewIdeaForm/InputSCH";

function ScenarioHeaderInputs() {
  const { ideasKey } = useParams();
  const dispatch = useDispatch();

  const { wacc, tg, costOfEquity } = useSelector((state) => state.newIdea);

  function handleChangeWacc(e) {
    e.preventDefault();
    dispatch(typeWACC(e.target.value));
    dispatch(setErrorsDCF());
  }

  function handleChangeTG(e) {
    e.preventDefault();
    dispatch(typeTG(e.target.value));
    dispatch(setErrorsDCF());
  }

  function handleChangeCOE(e) {
    e.preventDefault();
    dispatch(typeCOE(e.target.value));
    dispatch(setErrorCOE());
  }
  return (
    <div className=" h-7 flex items-center gap-6  absolute top-[10px] left-1/2 translate-x-[-50%]">
      {ideasKey === "discounted_cf" && (
        <>
          <InputSCH
            name="W.A.C.C."
            item={wacc}
            onChange={(e) => handleChangeWacc(e)}
          />
          <InputSCH
            name="T-Growth"
            item={tg}
            onChange={(e) => handleChangeTG(e)}
          />
        </>
      )}
      {ideasKey === "exit_multiple" && (
        <InputSCH
          name="Cost of Equity"
          item={costOfEquity}
          onChange={(e) => handleChangeCOE(e)}
        />
      )}
    </div>
  );
}

export default ScenarioHeaderInputs;
