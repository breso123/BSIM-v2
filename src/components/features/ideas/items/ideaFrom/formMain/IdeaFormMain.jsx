/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
  setErrorCOE,
  setErrorDbtEb,
  setErrorEbmg,
  setErrorMulti,
  setErrorShares,
  setErrorsDCF,
  setErrorsInput,
  setErrorsTC,
  setIsSubmitting,
} from "../../../newIdeaSlice";
import {
  setIdeaObj,
  setItemsDCF,
  setItemsMulti,
  setOptimistic,
  setPessimistic,
  setRealistic,
} from "../../../ideasSlice";
import CustomInputs from "./ideaFormMain/CustomInputs";
import TitleContent from "./ideaFormMain/TitleContent";
import ScenarioHeaderInputs from "./ideaFormMain/ScenarioHeaderInputs";
import useScenarioValues from "./useScenarioValues";
import { useParams } from "react-router-dom";
import useErrorNI from "./useErrorNI";
import Button1 from "../../../../../../ui/buttons/Button1";

function IdeaFormMain({ vals, actual, nosGR, multies, margins, dbtEb }) {
  const dispatch = useDispatch();
  const { ideasKey } = useParams();
  const newIdea = useSelector((state) => state.newIdea);
  const errors = useErrorNI();
  const { opt, real, pess } = useScenarioValues(newIdea, actual);
  const { price } = useSelector((state) => state.app);
  const { statements } = useSelector((state) => state.financials);
  const { general } = useSelector((state) => state.general);
  const { income_statement, balance_sheet } = statements;
  const { caceq, ostin, ltiN, dbtT, min } = balance_sheet[0];
  const sum = caceq + ostin + ltiN - dbtT - min;
  const user = JSON.parse(localStorage.getItem("user"));

  function handlePreSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).some((v) => v !== "")) {
      dispatch(setErrorsInput());
      dispatch(setErrorsTC());
      dispatch(setErrorEbmg());
      ideasKey === "discounted_cf" && dispatch(setErrorsDCF());
      ideasKey === "exit_multiple" && dispatch(setErrorCOE());
      ideasKey === "exit_multiple" && dispatch(setErrorShares());
      ideasKey === "exit_multiple" && dispatch(setErrorMulti());
      newIdea.multipleVal === "EV/EBITDA" && dispatch(setErrorDbtEb());
    } else {
      dispatch(setOptimistic(opt));
      dispatch(setRealistic(real));
      dispatch(setPessimistic(pess));
      ideasKey === "discounted_cf" &&
        dispatch(
          setItemsDCF({
            wacc: newIdea.wacc / 100,
            tg: newIdea.tg / 100,
            cash: balance_sheet[0].caceq,
            debt: balance_sheet[0].dbtT,
            fas: balance_sheet[0].ostin + balance_sheet[0].ltiN,
            nci: balance_sheet[0].min,
          })
        );
      ideasKey === "exit_multiple" &&
        dispatch(setItemsMulti({ coe: newIdea.costOfEquity / 100 }));
      dispatch(
        setIdeaObj({
          user: user.email,
          id: String(new Date().getTime()),
          title: newIdea.title,
          content: newIdea.content,
          ticker: general.symbol,
          date: new Date().toISOString(),
          val: newIdea.valuation,
          historical: actual,
          shares: income_statement[0].dsou,
          cp: price,
          latest: actual[actual.length - 1].value,
          key: ideasKey,
          sum,
        })
      );
      dispatch(setIsSubmitting());
    }
  }

  return (
    <div className="h-full grid grid-cols-1 justify-items-center w-full relative">
      <CustomInputs
        vals={vals}
        nosGR={nosGR}
        multies={multies}
        margins={margins}
        dbtEb={dbtEb}
      />
      <TitleContent />
      <ScenarioHeaderInputs />
      <Button1 type="submitIdea" onClick={(e) => handlePreSubmit(e)}>
        Submit
      </Button1>
    </div>
  );
}

export default IdeaFormMain;
