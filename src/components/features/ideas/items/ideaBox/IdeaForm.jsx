/* eslint-disable react/prop-types */
import FormMain from "../ideaFrom/FormMain";
import FormHeader from "../ideaFrom/formHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setErrorCOE,
  setErrorDbtEb,
  setErrorEbmg,
  setErrorMulti,
  setErrorShares,
  setErrorsDCF,
  setErrorsInput,
  setErrorsTC,
  switchValuation,
} from "../../newIdeaSlice";
import IdeaOverview from "../ideaFrom/IdeaOverview";
import { useParams } from "react-router-dom";
import useForecaster from "../useForecaster";
import { getStatAndItem } from "../../helpers/stringers";
import Overlay from "../../../../../ui/Overlay";

function IdeaForm() {
  const dispatch = useDispatch();
  const { ideasKey } = useParams();
  const newIdea = useSelector((state) => state.newIdea);
  const { newIdeaFormActive, ideaInProgress, itemsDCF, itemsMulti } =
    useSelector((state) => state.ideas);

  const style = {
    transform: `translate(-50%, ${newIdeaFormActive ? -50 : -250}%)`,
  };

  const item = getStatAndItem(newIdea);

  const tgtIdea =
    ideasKey === "discounted_cf"
      ? { ...ideaInProgress, ...itemsDCF }
      : { ...ideaInProgress, ...itemsMulti };

  const forecaster = useForecaster(item[0], item[1]);

  useEffect(() => {
    dispatch(
      switchValuation(
        ideasKey === "discounted_cf" ? "DCF" : newIdea.multipleVal
      )
    );
    dispatch(setErrorsInput());
    dispatch(setErrorsTC());
    dispatch(setErrorEbmg());
    ideasKey === "discounted_cf" && dispatch(setErrorsDCF());
    ideasKey === "exit_multiple" && dispatch(setErrorCOE());
    ideasKey === "exit_multiple" && dispatch(setErrorShares());
    ideasKey === "exit_multiple" && dispatch(setErrorMulti());
    newIdea.multipleVal === "EV/EBITDA" && dispatch(setErrorDbtEb());
  }, [dispatch, ideasKey, newIdea]);
  if (!forecaster?.vals) return;

  return (
    <>
      <Overlay item={newIdeaFormActive} />
      <div
        style={style}
        className="h-[90%] w-[90%] flex flex-col items-center justify-center pb-4 bg-white absolute top-1/2 left-1/2 rounded-xl transition-all duration-300"
      >
        <FormHeader />

        {!newIdea.isSubmitting ? (
          <FormMain
            vals={forecaster?.vals}
            nosGR={forecaster?.nosGR}
            multies={forecaster?.multies}
            margins={forecaster?.margins}
            dbtEb={forecaster?.dbtEb}
            actual={forecaster?.actual}
            allValues={forecaster?.allValues}
            length={forecaster?.actual.length - 1}
          />
        ) : (
          <IdeaOverview
            idea={tgtIdea}
            scenario={newIdea?.selectedIdea}
            isConfirmed={false}
          />
        )}
      </div>
    </>
  );
}

export default IdeaForm;
