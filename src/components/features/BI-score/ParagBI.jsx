import { useParams } from "react-router-dom";
import useScoreBI from "./useScoreBI";
import { filter100, getParItemCol, titleStrings } from "./helpers/others";

function ParagBI() {
  const { keyBI } = useParams();
  const biScores = useScoreBI();
  const biSum = useScoreBI(true);
  if (!biSum.points) return;

  const biSumCT = { ...biSum, keyBI };
  const biScoresCT = biScores.map((bi, i) => {
    return { ...bi, category: titleStrings[keyBI][i] };
  });

  const scoresNeg = biScoresCT.filter((sc) => sc.points < 0);
  const scoresPos = biScoresCT.filter((sc) => sc.points > 0);

  const categoryPos = scoresPos.map((sc) => sc.category).join(" and ");
  const categoryNeg = scoresNeg.map((sc) => sc.category).join(" and ");

  return (
    <div className="w-[60%] h-[9rem] flex items-center text-justify rounded-xl font-sans text-stone-900 shadow-statPrice2 py-2 px-4 bg-indigo-300/25 mt-7">
      <p>
        For the year 2021,{" "}
        {keyBI !== "total" && `in ${keyBI.replaceAll("_", " ")} category, `}
        Apple Inc. achieved total {biSumCT.points > 0
          ? "positive"
          : "negative"}{" "}
        BI-score of{" "}
        <b className={`${getParItemCol(biSumCT.points)}`}>
          {biSumCT.points.toFixed(1)}
        </b>{" "}
        points.{" "}
        {scoresPos.length === 0 && filter100(biScoresCT, scoresNeg, false)}{" "}
        {scoresNeg.length === 0 && filter100(biScoresCT, scoresPos)}
        {scoresPos.length !== 0 &&
          scoresNeg.length !== 0 &&
          `${categoryPos} recorded positive BI-score while ${categoryNeg} ${
            scoresNeg.length === 1 ? "was" : "were"
          } in the negative BI-zone.`}
      </p>
    </div>
  );
}

export default ParagBI;
