/* eslint-disable react/prop-types */
function ScenarioBtn({ scenario, col, isClicked, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`h-8 ${
        isClicked ? `text-${col} font-semibold italic` : ""
      } text-xs tracking-wide w-[5rem] font-sans hover:italic hover:font-semibold hover:text-${col}`}
    >
      {scenario}
    </button>
  );
}

export default ScenarioBtn;
