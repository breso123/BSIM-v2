import { useDispatch, useSelector } from "react-redux";
import { setbackSteps } from "../../newIdeaSlice";
import { hideNewIdeaForm } from "../../ideasSlice";
import { useNavigate } from "react-router-dom";
import CtrlBtns from "./formItems/CtrlBtns";
import ErrorPar from "./formItems/ErrorPar";
import ButtonSQ from "../../../../../ui/ButtonSQ";

/* eslint-disable react/prop-types */
function FormHeader() {
  const { lcDisplay, isSubmitting } = useSelector((state) => state.newIdea);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dispSC = ["Setup", "Chart"];

  function removeForm(e) {
    e.preventDefault();
    dispatch(hideNewIdeaForm());
    dispatch(setbackSteps());
    navigate(-1);
  }

  return (
    <div className="h-[10%] w-full mb-5 bg-indigo-200/50 shadow-hoverFins flex items-center justify-between px-16">
      <p className="font-sans text-lg font-semibold text-blue-950 tracking-wide">
        New Idea Setup
      </p>
      {!isSubmitting && <ErrorPar />}
      {!isSubmitting && <CtrlBtns arr={dispSC} item={lcDisplay} type="disp" />}
      <ButtonSQ onClick={(e) => removeForm(e)} type="close">
        X
      </ButtonSQ>
    </div>
  );
}

export default FormHeader;
