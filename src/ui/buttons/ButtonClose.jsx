/* eslint-disable react/prop-types */
function ButtonClose({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-6 w-6 rounded-full bg-blue-950 text-white text-sm absolute top-2 right-2"
    >
      X
    </button>
  );
}

export default ButtonClose;
