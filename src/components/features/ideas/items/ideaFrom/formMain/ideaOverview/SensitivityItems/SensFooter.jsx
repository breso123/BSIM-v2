/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import CtrlBtns from "../../../formItems/CtrlBtns";

function SensFooter({ idea, period, setPeriod }) {
  const { sensDisplay } = useSelector((state) => state.newIdea);

  function handleChangePer(e) {
    e.preventDefault();
    setPeriod(+e.target.value);
  }

  return (
    <div className="w-[30rem] h-8 ml-0 mt-4 flex items-center justify-center gap-48">
      {idea.valuation !== "DCF" && (
        <select
          className="w-[5rem] font-mono h-5 px-1 text-sm text-blue-950 border-x-2 bg-indigo-400/25 border-blue-950/75 italic rounded-md"
          value={period}
          onChange={(e) => handleChangePer(e)}
        >
          {idea.realistic.values.map((v, i) => (
            <option key={i} value={v.period}>
              {v.period}
            </option>
          ))}
        </select>
      )}
      <div>
        <CtrlBtns arr={["Value", "Diff"]} item={sensDisplay} type="sens" />
      </div>
    </div>
  );
}

export default SensFooter;
