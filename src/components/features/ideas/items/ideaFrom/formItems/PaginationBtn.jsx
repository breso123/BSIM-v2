/* eslint-disable react/prop-types */
import ButtonSQ from "../../../../../../ui/ButtonSQ";
import PaginSVG from "../../../../../../ui/PaginSVG";

function PaginationBtn({ onClick, step, dir }) {
  const selectedStep = dir === "left" ? 1 : 3;

  function getBtnStyle() {
    return `bg-${step === selectedStep ? "slate-300" : "blue-400"} text-${
      step === selectedStep ? "blue-900/50" : "indigo-800"
    } ${step !== selectedStep && "hover:bg-blue-900 hover:text-indigo-200"} ${
      step === selectedStep && "opacity-50"
    }`;
  }

  return (
    <div className="h-full w-[12.5%] flex items-center justify-center">
      <ButtonSQ
        type="pagination"
        additional={getBtnStyle(step)}
        disabled={step === (dir === "left" ? 1 : 3)}
        onClick={onClick}
      >
        <PaginSVG dir={dir} />
      </ButtonSQ>
    </div>
  );
}

export default PaginationBtn;
