/* eslint-disable react/prop-types */
function PagBottomBtns({ setStep, step, numOfSteps }) {
  function handleStepPGB(e, index) {
    e.preventDefault();
    setStep(index);
  }

  return (
    <div className="flex items-center gap-4 my-6">
      {Array.from({ length: numOfSteps + 1 }).map((_, i) => (
        <button
          key={i}
          onClick={(e) => handleStepPGB(e, i + 1)}
          className={`w-3 h-3 rounded-full shadow-hoverFins ${
            step === i + 1
              ? "bg-indigo-700 shadow-statPrice"
              : "shadow-hoverFins"
          }`}
        ></button>
      ))}
    </div>
  );
}

export default PagBottomBtns;
