import BarsBI from "./BarsBI";
import useScoreBI from "./useScoreBI";

function ScoreTotal() {
  const pts = useScoreBI(true);
  if (!pts?.max || !pts?.points) return;

  return (
    <div className="w-full h-[40%] flex flex-col items-center justify-center gap-5 mb-4">
      <p className="text-2xl drop-shadow-gridderInd text-indigo-900/80 font-semibold italic tracking-wide">
        Period: 2021
      </p>
      <BarsBI type="head" maxVal={pts.max} val={pts.points} />
    </div>
  );
}

export default ScoreTotal;
