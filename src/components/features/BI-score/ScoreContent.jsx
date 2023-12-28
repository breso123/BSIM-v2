import HeaderStatistics from "../statistics/HeaderStatistics";
import ParagBI from "./ParagBI";
import ScoreBreakdown from "./ScoreBreakdown";
import ScoreControl from "./ScoreControl";
import ScoreDetails from "./ScoreDetails";
import ScoreTotal from "./ScoreTotal";

function ScoreContent() {
  return (
    <div className="w-[65.9rem] h-full border-t-2 border-l-2 border-solid border-blue-950 px-4 relative">
      <HeaderStatistics />
      <div className="flex flex-col items-center w-full h-[85%] px-5">
        <ScoreTotal />
        <ScoreBreakdown />
        <ParagBI />
        <p className="h-[10%] italic text-stone-800 font-sans mt-6">
          You can dive deeper into each category and see its own BI-score
          performance breakdowns
        </p>
        <ScoreControl />
      </div>
      <ScoreDetails />
    </div>
  );
}

export default ScoreContent;
