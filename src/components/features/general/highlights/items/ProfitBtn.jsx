/* eslint-disable react/prop-types */
function ProfitBtn({ onClick, kw, isSelected }) {
  return (
    <button
      onClick={(e) => onClick(e)}
      className={`w-16 ${
        isSelected ? "text-blue-950 font-serif drop-shadow-gridderInd" : ""
      }`}
    >
      {kw[0].split(" ").map((kw) => kw[0].toUpperCase() + kw.slice(1))}
    </button>
  );
}

export default ProfitBtn;
