/* eslint-disable react/prop-types */
import { memo } from "react";
import useDonut from "../../../chartHooks/useDonut";

const Chart = memo(function Chart({ data }) {
  const chartRef = useDonut(
    data,
    ["blue", "midnightblue", "#7c3aed"],
    ["Insiders", "Institutions", "Other"]
  );

  return <div className="absolute top-[2.5%] left-[26%]" ref={chartRef}></div>;
});

export default Chart;
