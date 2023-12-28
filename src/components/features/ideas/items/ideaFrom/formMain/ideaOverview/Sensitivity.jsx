/* eslint-disable react/prop-types */
import ScenarioHeader from "../ScenarioHeader";
import useSensitivity from "./useSensitivity";
import { useState } from "react";
import HeaderSens from "./SensitivityItems/HeaderSens";
import SensBarLeft from "./SensitivityItems/SensBarLeft";
import SensTableMain from "./SensitivityItems/SensTableMain";
import SensFooter from "./SensitivityItems/SensFooter";
import SensDP from "./SensitivityItems/SensDP";

function Sensitivity({ idea, translate, isConfirmed }) {
  const transform = { transform: `translate(${translate})` };
  const [rangeVal, setRangeVal] = useState("0.1");
  const [period, setPeriod] = useState(
    idea.historical[idea.historical.length - 1].period + 1
  );

  const { allVals, coe, gr } = useSensitivity(
    idea,
    isConfirmed,
    rangeVal,
    period
  );

  return (
    <div
      style={transform}
      className="w-full h-full flex flex-col items-center gap-2 transition-all duration-300"
    >
      <ScenarioHeader desc="Sensitivity Analysis" isConfirmed={isConfirmed} />
      <div className="w-full h-full pl-8 flex justify-center gap-2 mt-[-15px] font-sans relative">
        <div className="w-[72.5%] h-48  flex-col items-center justify-center mt-8 font-sans relative">
          <HeaderSens
            coe={coe}
            rangeVal={rangeVal}
            setRangeVal={setRangeVal}
            idea={idea}
          />
          <SensBarLeft gr={gr} idea={idea} />
          <SensTableMain idea={idea} allVals={allVals} />
          <SensFooter idea={idea} period={period} setPeriod={setPeriod} />
        </div>
        <SensDP allVals={allVals} idea={idea} />
      </div>
    </div>
  );
}

export default Sensitivity;
