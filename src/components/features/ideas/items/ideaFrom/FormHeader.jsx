import { useDispatch, useSelector } from "react-redux";
import {
  setbackSteps,
  switchLcDisplay,
  switchValMultiple,
  unsetIsSubmitting,
} from "../../newIdeaSlice";
import { emptyIdeaObj } from "../../ideasSlice";
import { useNavigate, useParams } from "react-router-dom";
import ErrorPar from "./formItems/ErrorPar";
import ButtonClose from "../../../../../ui/buttons/ButtonClose";
import Select1 from "../../../../../ui/selects/Select1";

/* eslint-disable react/prop-types */
function FormHeader() {
  const { ideasKey } = useParams();
  const { isSubmitting, multipleVal } = useSelector((state) => state.newIdea);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function removeForm(e) {
    e.preventDefault();
    dispatch(setbackSteps());
    dispatch(emptyIdeaObj());
    dispatch(unsetIsSubmitting());
    dispatch(switchLcDisplay("Setup"));
    navigate(-1);
  }

  function handleChange(e) {
    e.preventDefault();
    dispatch(switchValMultiple(e.target.value));
  }

  return (
    <div className="h-[12.5%] w-full mb-5 bg-indigo-200/50 shadow-hoverFins flex items-center justify-between px-5">
      <div className="font-sans text-md font-semibold text-blue-950 tracking-wide flex flex-col items-start gap-1">
        <p>New Idea Setup</p>
        {ideasKey === "exit_multiple" && (
          <Select1 value={multipleVal} onChange={(e) => handleChange(e)}>
            <option value="P/E">P/E</option>
            <option value="P/S">P/S</option>
            <option value="EV/EBITDA">EV/EBITDA</option>
          </Select1>
        )}
      </div>
      {!isSubmitting && <ErrorPar />}
      <div
        className={`w-[12rem] flex flex-col items-center justify-self-center ${
          isSubmitting && "pr-5"
        }`}
      >
        <p className="text-indigo-900/75 font-semibold flex flex-col items-center gap-1">
          <span className="text-sm">Valuation</span>
          <span className="italic drop-shadow-gridderInd text-lg tracking-wider text-indigo-800">
            {ideasKey === "discounted_cf" ? "DCF" : multipleVal}
          </span>
        </p>
      </div>
      <ButtonClose onClick={(e) => removeForm(e)} />
    </div>
  );
}

export default FormHeader;
