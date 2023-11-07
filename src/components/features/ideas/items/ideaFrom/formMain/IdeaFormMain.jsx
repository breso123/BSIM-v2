/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { setErrors, setIsSubmitting } from "../../../newIdeaSlice";
import {
  setIdeaObj,
  setOptimistic,
  setPessimistic,
  setRealistic,
} from "../../../ideasSlice";
import { formatDate } from "../../../../../../helpers/formatters";
import CustomInputs from "./ideaFormMain/CustomInputs";
import TitleContent from "./ideaFormMain/TitleContent";
import ScenarioHeaderInputs from "./ideaFormMain/ScenarioHeaderInputs";
import useScenarioValues from "./useScenarioValues";

function IdeaFormMain({ vals, actual }) {
  const dispatch = useDispatch();
  const newIdea = useSelector((state) => state.newIdea);
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
    if (Object.values(newIdea.errors).some((v) => v !== ""))
      dispatch(setErrors());
    else {
      dispatch(setOptimistic(opt));
      dispatch(setRealistic(real));
      dispatch(setPessimistic(pess));
      dispatch(
        setIdeaObj({
          user: user.email,
          id: String(new Date().getTime()),
          title: newIdea.title,
          content: newIdea.content,
          ticker: general.symbol,
          date: formatDate(new Date()),
          val: newIdea.valuation,
          wacc: newIdea.wacc / 100,
          tg: newIdea.tg / 100,
          cash: balance_sheet[0].caceq,
          historical: actual,
          debt: balance_sheet[0].dbtT,
          fas: balance_sheet[0].ostin + balance_sheet[0].ltiN,
          nci: balance_sheet[0].min,
          shares: income_statement[0].dsou,
          cp: price,
          latest: actual[actual.length - 1].value,
          sum,
        })
      );
      dispatch(setIsSubmitting());
    }
  }

  return (
    <div className="grid grid-cols-1 justify-items-center w-full">
      <CustomInputs vals={vals} />
      <TitleContent />
      <ScenarioHeaderInputs />
      <button
        onClick={(e) => handlePreSubmit(e)}
        className="shadow-hoverFins px-6 py-1 rounded-full bg-lime-300/75 text-indigo-800 font-semibold font-sans "
      >
        Submit
      </button>
    </div>
  );
}

export default IdeaFormMain;
