import useDonut from "../../../chartHooks/useDonut";

// eslint-disable-next-line react/prop-types
function TechnicalsDonut({ data }) {
  const chartRef = useDonut(
    data,
    ["#172554", "#92400e", "#4b5563"],
    ["Buy", "Sell", "Neutral"],
    350
  );

  return (
    <div
      className=" top-0 h-1/2 w-full relative left-[15%]"
      ref={chartRef}
    ></div>
  );
}

export default TechnicalsDonut;
