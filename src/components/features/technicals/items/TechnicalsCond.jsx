import { useSelector } from "react-redux";
import MovingAvgsTable from "./MovingAvgsTable";
import OscTable from "./OscTable";

function TechnicalsCond() {
  const { price, contentKey, featureKey } = useSelector((state) => state.app);
  const { movingAvgs, oscillators, timeFrame } = useSelector(
    (state) => state.technicals
  );

  if (featureKey !== "technicals") return;
  if (contentKey === "Moving Averages" || contentKey === "moving_averages")
    return (
      <MovingAvgsTable
        movingAvgs={movingAvgs}
        price={price}
        timeFrame={timeFrame}
      />
    );

  if (contentKey === "Oscillators" || contentKey === "oscillators")
    return <OscTable oscillators={oscillators} timeFrame={timeFrame} />;
  else
    return (
      <>
        <MovingAvgsTable
          movingAvgs={movingAvgs}
          price={price}
          timeFrame={timeFrame}
        />
        <OscTable oscillators={oscillators} timeFrame={timeFrame} />
      </>
    );
}

export default TechnicalsCond;
