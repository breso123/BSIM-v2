/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import CardsFV from "./CardsFV";
import ChartIO from "./ChartIO";

function Step2Display({ idea, isConfirmed, translate }) {
  const { valuation, historical } = idea;
  const { selectedIdea } = useSelector((state) => state.newIdea);
  const tgtIdea = [...historical, ...idea[selectedIdea].values];
  const cagr = idea[selectedIdea].cagr;
  const transform = { transform: `translate(${translate},-100%)` };

  if (valuation === "DCF")
    return (
      <CardsFV idea={idea} isConfirmed={isConfirmed} transform={transform} />
    );
  else
    return (
      <ChartIO
        idea={tgtIdea}
        isConfirmed={isConfirmed}
        cagr={cagr}
        valuation={valuation}
        transform={transform}
      />
    );
}

export default Step2Display;
