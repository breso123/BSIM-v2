import { useSelector } from "react-redux";
import DetailsBox from "./DetailsBox";
import TotalBar from "./TotalBar";

function DetailsMain() {
  const { clickedScore } = useSelector((state) => state.scorebi);
  if (!clickedScore) return;

  const total = clickedScore
    .map((cs) => cs.total.points)
    .reduce((pt, acc) => pt + acc, 0);

  return (
    <div className="h-[90%] w-full flex flex-col items-center gap-4 px-7 py-7">
      <div className="w-full h-[90%] px-4 py-8 flex flex-col gap-12 overflow-scroll">
        {clickedScore.map((cs, i) => (
          <DetailsBox cs={cs} key={i} />
        ))}
      </div>
      <TotalBar total={total} />
    </div>
  );
}

export default DetailsMain;
