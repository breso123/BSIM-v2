/* eslint-disable react/prop-types */
function AppNavBtn({ ft, onClick, isSelected }) {
  return (
    <button
      onClick={onClick}
      className={`appNav ${
        isSelected
          ? "italic drop-shadow-gridderBld bg-blue-950 text-blue-200 p-2 hover:text-white transition-all duration-200"
          : ""
      }`}
    >
      {ft === "general" ? "Stock" : ft[0].toUpperCase() + ft.slice(1)}
    </button>
  );
}

export default AppNavBtn;
