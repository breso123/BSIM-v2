/* eslint-disable react/prop-types */
function TechnicalsLegend({ value, title, col }) {
  return (
    <div className="flex items-center justify-between gap-1 w-full">
      <div className={`h-2 w-2 bg-${col} rounded-full`}></div>
      <p className={`grow text-left text-${col}`}>{title}</p>
      <p className={`text-${col}`}>{value}</p>
    </div>
  );
}

export default TechnicalsLegend;
