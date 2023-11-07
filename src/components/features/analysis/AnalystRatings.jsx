import { useSelector } from "react-redux";
import RatingBox from "./analysisBox/RatingBox";

function AnalystRatings() {
  const { ratings } = useSelector((state) => state.analysis.ratings);

  return (
    <div className="grid grid-cols-1 px-2 items-center justify-items-center gap-y-2 h-[38rem] overflow-scroll">
      {ratings?.map((r, i) => (
        <RatingBox key={i} r={r} />
      ))}
    </div>
  );
}

export default AnalystRatings;
