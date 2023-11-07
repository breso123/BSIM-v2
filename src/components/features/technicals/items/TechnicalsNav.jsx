import ButtonTF from "./ButtonTF";

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
  return (
    <div className="grid grid-cols-5 items-center justify-items-center h-14 w-[25rem] px-2 py-1 mt-24 text-sm shadow-watchList bg-indigo-800/75 text-white/75 rounded-xl">
      {possibleIntervals.map((interval, i) => (
        <ButtonTF key={i} interval={interval} />
      ))}
    </div>
  );
}

export default TechnicalsNav;
