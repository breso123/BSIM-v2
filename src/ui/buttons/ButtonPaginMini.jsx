/* eslint-disable react/prop-types */
function ButtonPaginMini({ dir, onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-5 w-5 bg-slate-300 rounded-full flex items-center justify-center"
    >
      {dir === "left" ? "-" : "+"}
    </button>
  );
}

export default ButtonPaginMini;
