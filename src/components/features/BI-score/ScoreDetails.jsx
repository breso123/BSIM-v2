import { useSelector } from "react-redux";
import Overlay from "../../../ui/Overlay";
import DetailsHeader from "./scoreDetails/DetailsHeader";
import DetailsMain from "./scoreDetails/DetailsMain";

function ScoreDetails() {
  const { clickedScore } = useSelector((state) => state.scorebi);
  const styleChartContainer = {
    transform: `translate(-50%, ${clickedScore !== null ? -50 : -850}%)`,
  };
  const height = `${clickedScore ? "70%" : "20%"}`;

  return (
    <>
      <Overlay item={clickedScore} />
      <div
        style={styleChartContainer}
        className={`w-[50%] h-[${height}] flex flex-col items-center bg-white rounded-lg absolute top-1/2 left-1/2 transition-all duration-300 z-50`}
      >
        <DetailsHeader />
        {clickedScore ? (
          <DetailsMain />
        ) : (
          <p className="h-[90%] flex items-center">
            To see BI-score breakdown click on a category below TOTAL button
          </p>
        )}
      </div>
    </>
  );
}

export default ScoreDetails;
