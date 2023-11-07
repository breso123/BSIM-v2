import { formatPercentage } from "../../helpers/formatters";
import ReusableCircle from "./ReusableCircle";
import styles from "./ReusableSVG.module.css";

/* eslint-disable react/prop-types */
function ReusableSVG({
  percent,
  strokeDashoffset,
  svgSize = 100,
  strokeWidth = 8,
}) {
  const notPositive = percent === null ? "gray" : "darkred";

  const style = {
    color: percent > 0 ? "midnightblue" : `${notPositive}`,
    fontSize: `${(14 * svgSize) / 100}px`,
    textShadow: `${svgSize > 100 ? "1px 1px 5px midnightblue" : ""}`,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
  };

  return (
    <div className={styles.finChartSvgCont}>
      <svg
        className={styles.svgCircle}
        width={svgSize}
        height={svgSize}
        xmlns="http://www.w3.org/2000/svg"
      >
        <ReusableCircle
          svgSize={svgSize}
          stroke={+percent > 0 ? "midnightblue" : `${notPositive}`}
          strokeWidth={strokeWidth}
        />
        <ReusableCircle
          svgSize={svgSize}
          stroke={+percent > 0 ? "lightblue" : "orange"}
          strokeWidth={strokeWidth / 3}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <p className="percInCircle" style={style}>
        {formatPercentage(percent)}
      </p>
    </div>
  );
}

export default ReusableSVG;
