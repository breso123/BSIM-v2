import { formatPercentage } from "../../../../helpers/formatters";
import Box from "../../../../ui/box/Box";
import StatBoxMain from "../../statistics/StatisticsBox/StatBoxMain";

/* eslint-disable react/prop-types */
function RatingBox({ r }) {
  const change = r.price_target_current / r.price_target_prior - 1;
  const style = { color: change < 0 ? "#c2410c" : "#1e40af" };
  const shadow = {
    boxShadow: `inset 0 0 5px ${change < 0 ? "#be123c" : "#172554"}`,
  };

  return (
    <Box type="rating">
      <StatBoxMain>
        <div className="w-full h-full flex items-center justify-between px-8">
          <div className="flex flex-col items-start justify-between h-full w-1/3">
            <p className="text-indigo-900 font-semibold">{r.firm}</p>
            <p className="text-sm italic">Analyst: {r.analyst_name}</p>
          </div>
          <div className="flex items-center justify-center gap-4 grow relative">
            <p
              style={shadow}
              className="absolute top-[-35px] left-[37.5%] h-6 w-32 rounded-full text-center text-sm font-mono pt-0.5 text-blue-950 font-semibold italic tracking-wide"
            >
              {r.rating_change}
            </p>
            <span className="italic">From</span>
            <p className="text-3xl w-16 text-center relative">
              {r.price_target_prior ?? "-"}
              <span className="text-xs absolute top-10 left-0  w-16 text-center">
                {r.rating_prior}
              </span>
            </p>
            <span className="italic">to</span>
            <p
              style={style}
              className="text-3xl w-16 text-center font-semibold  relative"
            >
              <span>{r.price_target_current ?? "-"}</span>
              <span className="text-[1rem] absolute left-[120%]">
                {!r.price_target_prior ? "" : formatPercentage(change)}
              </span>
              <span className="text-xs absolute top-10 left-0  w-16 text-center">
                {r.rating_current}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-end justify-between h-full w-1/3">
            <p className="text-sm italic">{r.date.replaceAll("-", " / ")}</p>
            <p className="text-lg tracking-wide text-blue-950 font-serif">
              {r.action_price_target}
            </p>
          </div>
        </div>
      </StatBoxMain>
    </Box>
  );
}

export default RatingBox;
