/* eslint-disable react/prop-types */
function Overlay({ item }) {
  return (
    <div
      style={{
        display: item ? "block" : `${item === undefined ? "block" : "none"}`,
      }}
      className="h-full w-full blur-[5px] bg-blue-950 absolute top-0 left-0 opacity-50 transition-all duration-300"
    ></div>
  );
}

export default Overlay;
