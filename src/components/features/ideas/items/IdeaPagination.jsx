/* eslint-disable react/prop-types */
import { useState } from "react";
import PaginationBtn from "./ideaFrom/formItems/PaginationBtn";
import LineChart from "./ideaFrom/formMain/ideaOverview/LineChart";
import Step2Display from "./ideaFrom/formMain/ideaOverview/Step2Display";
import TableDCF from "./ideaFrom/formMain/ideaOverview/TableDCF";

function IdeaPagination({ idea, scenario, isConfirmed }) {
  const [step, setStep] = useState(1);

  function handleStepPrev(e) {
    e.preventDefault();
    step > 1 && setStep(step - 1);
  }

  function handleStepNext(e) {
    e.preventDefault();
    step < 3 && setStep(step + 1);
  }
  return (
    <div className="w-full flex items-center min-h-[75%]">
      <PaginationBtn
        onClick={(e) => handleStepPrev(e)}
        dir="left"
        step={step}
      />
      <div className="w-[75%] h-full flex items-start justify-center">
        {step === 1 && (
          <TableDCF idea={idea} scenario={scenario} isConfirmed={isConfirmed} />
        )}
        {step === 2 && <Step2Display idea={idea} isConfirmed={isConfirmed} />}
        {step === 3 && (
          <LineChart
            values={idea.historical}
            idea={idea}
            isConfirmed={isConfirmed}
          />
        )}
      </div>
      <PaginationBtn
        onClick={(e) => handleStepNext(e)}
        dir="right"
        step={step}
      />
    </div>
  );
}

export default IdeaPagination;
