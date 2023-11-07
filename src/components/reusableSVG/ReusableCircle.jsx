/* eslint-disable react/prop-types */
import styles from "./ReusableSVG.module.css";

function ReusableCircle({
  svgSize,
  strokeWidth = 8,
  stroke,
  strokeDashoffset = 0,
  style = {
    filter: stroke !== "gray" && `drop-shadow(0px 0px 3px ${stroke})`,
  },
}) {
  return (
    <circle
      className={styles.reusableCircle}
      cy={svgSize / 2}
      cx={svgSize / 2}
      r={svgSize / 3}
      strokeDasharray={svgSize * 2.1}
      strokeDashoffset={strokeDashoffset}
      strokeWidth={stroke !== "gray" ? strokeWidth : 4}
      stroke={stroke}
      fill="none"
      style={style}
    />
  );
}

export default ReusableCircle;
