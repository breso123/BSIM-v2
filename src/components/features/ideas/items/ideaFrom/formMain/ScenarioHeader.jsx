/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { setErrors, switchForecastBy } from "../../../newIdeaSlice";
import CtrlBtns from "../formItems/CtrlBtns";

function ScenarioHeader({ desc, isConfirmed }) {
  const { scenario } = useSelector((state) => state.ideas);
  const { forecastBy, isSubmitting, selectedIdea, ivpsDisplay } = useSelector(
    (state) => state.newIdea
  );

  const dispatch = useDispatch();
  const scenarios = ["Optimistic", "Realistic", "Pessimistic"];
  const dispIV = ["Diff", "CAGR"];
  const si = selectedIdea[0].toUpperCase() + selectedIdea.slice(1);
  const si2 = scenario[0].toUpperCase() + scenario.slice(1);

  function handleChange(e) {
    e.preventDefault();
    dispatch(switchForecastBy(e.target.value));
    dispatch(setErrors());
  }

  return (
    <div className="w-full grid grid-cols-2 h-8 rounded-full border-b-2 border-blue-950 px-6">
      <p className="font-sans text-blue-950/75 font-semibold">{desc}</p>
      <div className="flex items-center justify-end">
        {!isSubmitting && !isConfirmed && (
          <select
            onChange={(e) => handleChange(e)}
            value={forecastBy}
            className="bg-white/10 border-x px-3 text-blue-950 italic border-blue-950 rounded-full"
          >
            <option value="cagr">CAGR</option>
            <option value="custom">Custom</option>
          </select>
        )}
        {desc === "DCF Table" && (
          <CtrlBtns
            arr={scenarios}
            item={!isConfirmed ? si : si2}
            type={!isConfirmed ? "sc" : "sc2"}
          />
        )}
        {desc === "Intrinsic Values per Share" && (
          <CtrlBtns arr={dispIV} item={ivpsDisplay} type="ivps" />
        )}
      </div>
    </div>
  );
}

export default ScenarioHeader;
