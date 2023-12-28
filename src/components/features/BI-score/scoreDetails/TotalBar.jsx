/* eslint-disable react/prop-types */
function TotalBar({ total }) {
  const stylesTotal = {
    borderTop: `2px solid ${total < 0 ? "#7f1d1d" : "#172554"}`,
    borderBottom: `2px solid ${total < 0 ? "#7f1d1d" : "#172554"}`,
    borderLeft: `0.5px solid ${total < 0 ? "#7f1d1d" : "#17255d"}`,
    borderRight: `0.5px solid ${total < 0 ? "#7f1d1d" : "#17255d"}`,
    backgroundColor: `${total < 0 ? "#f5d0fe" : "#ddd6fe"}`,
    boxShadow: `3px 3px 10px ${total < 0 ? "#c2410c" : "#818cf8"}`,
    color: `${total < 0 ? "#7f1d1d" : "#172554"}`,
  };
  return (
    <div
      style={stylesTotal}
      className={`w-[80%] h-[10%] rounded-lg  flex items-center justify-between px-5 font-semibold italic`}
    >
      <p>Total Category Score</p>
      <p>{total}</p>
    </div>
  );
}

export default TotalBar;
