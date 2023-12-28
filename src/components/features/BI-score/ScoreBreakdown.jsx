import { useParams } from "react-router-dom";
import ScoreBreakdownBox from "./ScoreBreakdownBox";
import { titleStrings } from "./helpers/others";

function ScoreBreakdown() {
  const { keyBI } = useParams();

  return (
    <div
      className={`w-full h-[30%] grid grid-cols-${titleStrings[keyBI].length} gap-5`}
    >
      {titleStrings[keyBI].map((ts, i) => (
        <ScoreBreakdownBox key={i} i={i} ts={ts} />
      ))}
    </div>
  );
}

export default ScoreBreakdown;
