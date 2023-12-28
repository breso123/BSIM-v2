/* eslint-disable react/prop-types */
import PaginSVG from "../../../../../ui/PaginSVG";
import ButtonPagination from "../../../../../ui/buttons/ButtonPagination";

function PaginationBtn({ onClick, step, dir, numOfSteps }) {
  const selectedStep = dir === "left" ? 1 : numOfSteps + 1;

  function getBtnStyle() {
    if (selectedStep === step) return "bg-stone-300 text-stone-700";
    else
      return "bg-blue-400 text-indigo-800 hover:bg-blue-900 hover:text-indigo-200";
  }

  return (
    <div className="h-full w-[12.5%] flex items-center justify-center">
      <ButtonPagination
        type="ideaPag"
        additional={getBtnStyle()}
        onClick={onClick}
        disabled={step === (dir === "left" ? 1 : numOfSteps + 1)}
      >
        <PaginSVG dir={dir} />
      </ButtonPagination>
    </div>
  );
}

export default PaginationBtn;
