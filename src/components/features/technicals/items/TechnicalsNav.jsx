import { useDispatch } from "react-redux";
import { switchTimeFrame } from "../technicalsSlice";
import Button1 from "../../../../ui/buttons/Button1";

const possibleIntervals = [
  "1min",
  "5min",
  "15min",
  "30min",
  "1h",
  "2h",
  "4h",
  "1day",
  "1week",
  "1month",
];

function TechnicalsNav() {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-5 items-center justify-items-center h-14 w-[25rem] px-2 py-1 mt-24 text-sm shadow-watchList bg-indigo-800/75 text-white/75 rounded-xl">
      {possibleIntervals.map((interval, i) => {
        function handleClick(e) {
          e.preventDefault();
          dispatch(switchTimeFrame(interval));
        }
        return (
          <Button1 type="technicals" key={i} onClick={(e) => handleClick(e)}>
            {interval}
          </Button1>
        );
      })}
    </div>
  );
}

export default TechnicalsNav;
