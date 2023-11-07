/* eslint-disable react/prop-types */
import { formatNumOfShares } from "../../../../helpers/formatters";
import ChartBackground from "../../general/highlights/items/ChartBackground";
import StatBar from "../../statistics/items/StatBar";

function ChartFCST({
  data,
  period,
  isFormated = false,
  valueFormated = false,
  cols,
  analysts,
}) {
  const max = Math.max(...data);
  return (
    <div className="w-[80%] h-full flex flex-col items-center justify-center gap-12">
      <p className="text-xl tracking-wider text-blue-950/75 drop-shadow-gridderInd font-semibold font-sans">
        {period}
      </p>
      <div className="w-[50%] h-[50%] flex items-end justify-evenly gap-2 relative">
        {data.map((d, i) => (
          <StatBar
            key={i}
            index={i}
            d={d}
            max={max}
            width="2.5rem"
            cols={cols}
            isFormated={isFormated}
            valueFormated={valueFormated}
          />
        ))}
        <ChartBackground
          revenue={isFormated ? formatNumOfShares(max) : max}
          bn={false}
        />
      </div>
      <p className="text-sm text-blue-950 font-mono">
        Number of analysts:
        <span className="text-xl font-semibold ml-4 tracking-widest">
          {analysts}
        </span>
      </p>
    </div>
  );
}

export default ChartFCST;
