import { formatInterface2 } from "../../../../../../helpers/formatters";

/* eslint-disable react/prop-types */
function FormIdeaBar({ type, el, max }) {
  const styles = {
    actual: "bg-blue-800 text-blue-800",
    estimate: "bg-white shadow-hoverFins text-indigo-600",
  };
  const discToVal = el.discounted / el.value;
  const height = {
    height: el.value === max ? "100%" : `${(el.value / max) * 100}%`,
  };
  const dcfHeight = {
    height: discToVal === 1 ? "1%" : discToVal * 100 + "%",
  };

  return (
    <div
      style={height}
      className={`group h-[75%] w-8 flex justify-center items-end rounded-t-md relative group transition-all duration-300 ${styles[type]}`}
    >
      {type === "estimate" && (
        <div
          style={dcfHeight}
          className="w-[80%] bg-indigo-700/50 rounded-t-md relative transition-all duration-300"
        ></div>
      )}
      <p className="text-xs opacity-75 group-hover:opacity-100 group-hover:italic absolute top-[-30px] left-1/2 translate-x-[-50%] font-sans font-semibold">
        {formatInterface2(Math.trunc(el.value))}
      </p>
      <p className="w-full text-center tracking-wider absolute bottom-[-25px] left-1/2 translate-x-[-50%] text-xs group-hover:font-semibold">
        {String(el.period).slice(-2)}
      </p>
    </div>
  );
}

export default FormIdeaBar;
