/* eslint-disable react/prop-types */
import { useState } from "react";
import PaginationBtn from "./paginationItems/PaginationBtn";
import PagItems from "./paginationItems/PagItems";
import PagBottomBtns from "./paginationItems/PagBottomBtns";

function IdeaPagination({ idea, scenario, isConfirmed }) {
  const [step, setStep] = useState(1);
  const { valuation } = idea;
  const chv = valuation === "DCF";
  const numOfSteps = chv ? 4 : 3;

  function handleStepPrev(e) {
    e.preventDefault();
    step > 1 && setStep(step - 1);
  }

  function handleStepNext(e) {
    e.preventDefault();
    step < numOfSteps + 1 && setStep(step + 1);
  }

  return (
    <>
      <div className="w-full flex items-center min-h-[75%]">
        <PaginationBtn
          onClick={(e) => handleStepPrev(e)}
          numOfSteps={numOfSteps}
          dir="left"
          step={step}
        />
        <PagItems
          idea={idea}
          isConfirmed={isConfirmed}
          step={step}
          numOfSteps={numOfSteps}
          scenario={scenario}
        />
        <PaginationBtn
          onClick={(e) => handleStepNext(e)}
          numOfSteps={numOfSteps}
          dir="right"
          step={step}
        />
      </div>
      <PagBottomBtns step={step} setStep={setStep} numOfSteps={numOfSteps} />
    </>
  );
}

export default IdeaPagination;
