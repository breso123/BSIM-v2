import { useLoaderData, useParams } from "react-router-dom";
import { loadDefault } from "../../../pages/services/apiFinancials";
import HeaderStatistics from "../statistics/HeaderStatistics";
import {
  formatInterface2,
  formatPercentage,
} from "../../../helpers/formatters";
import CircleReused from "../../../ui/circle/CircleReused";
import Box from "../../../ui/box/Box";

function OptionType() {
  const { optKey } = useParams();
  const options = useLoaderData();

  return (
    <div className="h-full w-[65.9rem] border-t-2 border-l-2 border-solid border-blue-950 px-4 relative">
      <HeaderStatistics />
      <div className="w-full max-h-[38rem] grid grid-cols-1 gap-y-4 justify-items-center overflow-scroll py-1">
        {options[optKey].map((opt, i) => {
          const col = opt.in_the_money ? "text-blue-700" : "text-orange-700";
          const colCh = opt.change > 0 ? "text-blue-800" : "text-orange-900";

          return (
            <Box type={opt.in_the_money ? "optionCall" : "optionPut"} key={i}>
              <div className="flex flex-col h-full items-start justify-between">
                <p className="text-xs italic text-blue-950">
                  ID: {opt.option_id}
                </p>
                <p className={`text-sm font-semibold font-sans ${col}`}>
                  {opt.in_the_money ? "In the Money" : "Out of Money"}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <p className="text-xs italic">Change</p>
                <div
                  className={`flex items-center w-24 justify-center gap-1 text-md font-semibold ${colCh}`}
                >
                  <p className="tracking-wider">{opt.change.toFixed(2)}</p>
                  <p className="text-xs ml-1 italic font-normal">
                    {formatPercentage(opt.percent_change / 100)}
                  </p>
                </div>
              </div>

              <div className="h-full flex flex-col items-center justify-between">
                <div className="flex items-center text-xs italic divide-x divide-blue-950/50 shadow-hoverFins rounded-full py-1 text-center font-semibold font-mono">
                  <p className="w-24 text-blue-900">Bid: {opt.bid}</p>
                  <p className="w-24 text-lime-800">Ask: {opt.ask}</p>
                </div>
                <div className="flex items-center justify-center gap-2 font-semibold text-xl font-sans text-blue-950 drop-shadow-gridderInd">
                  <p className="tracking-wide">Strike:</p>
                  <p>{opt.strike}</p>
                </div>
                <p className="text-sm text-indigo-900 italic font-mono">
                  Last Price: {opt.last_price}
                </p>
              </div>
              <div>
                <CircleReused
                  num={opt.implied_volatility}
                  svgSize={90}
                  strokeWidth={4}
                  sdo={190}
                />
              </div>
              <div className="flex flex-col h-full items-end justify-between text-sm font-sans">
                <p>
                  Volume:{" "}
                  <span className="font-semibold text-indigo-800 ml-1">
                    {formatInterface2(opt.volume, true)}
                  </span>
                </p>
                <p>
                  Open Interest:{" "}
                  <span className="font-semibold text-indigo-800 ml-1">
                    {formatInterface2(opt.open_interest, true)}
                  </span>
                </p>
              </div>
            </Box>
          );
        })}
      </div>
    </div>
  );
}

export async function loader() {
  const options = await loadDefault("options");
  return options;
}

export default OptionType;
