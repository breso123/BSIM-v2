/* eslint-disable react/prop-types */
import { formatPercentage } from "../../helpers/formatters";
import Circle from "./Circle";

function CircleReused({ num, sdo, svgSize = 100, strokeWidth = 8 }) {
  const notPositive = num === null ? "gray" : "darkred";
  const strokeDashoffset = (1 - (num < 0 ? Math.abs(num) : num)) * sdo;
  console.log(num, sdo);

  const style = {
    color: num > 0 ? "midnightblue" : `${notPositive}`,
    fontSize: `${(14 * svgSize) / 100}px`,
    textShadow: `${svgSize > 100 ? "1px 1px 5px midnightblue" : ""}`,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
  };
  return (
    <div className="flex items-center justify-center relative">
      <svg
        className="rotate-[-90deg]"
        width={svgSize}
        height={svgSize}
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle
          svgSize={svgSize}
          stroke={+num > 0 ? "midnightblue" : `${notPositive}`}
          strokeWidth={strokeWidth}
        />
        <Circle
          svgSize={svgSize}
          stroke={+num > 0 ? "lightblue" : "orange"}
          strokeWidth={strokeWidth / 3}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <p className="centered italic" style={style}>
        {formatPercentage(num)}
      </p>
    </div>
  );
}

export default CircleReused;
