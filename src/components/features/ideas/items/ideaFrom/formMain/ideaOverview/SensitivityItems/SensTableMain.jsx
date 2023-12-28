/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import SensTableRow from "./SensTableRow";

function SensTableMain({ idea, allVals }) {
  const { sensDisplay } = useSelector((state) => state.newIdea);
  return (
    <div className="flex items-center justify-center">
      {allVals.map((val, i) => {
        return (
          <SensTableRow
            key={i}
            idea={idea}
            sensDisplay={sensDisplay}
            val={val}
          />
        );
      })}
    </div>
  );
}

export default SensTableMain;
