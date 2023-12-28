/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import DescriptionSH from "./scenarioHeaderItems/DescriptionSH";
import CtrlSH from "./scenarioHeaderItems/CtrlSH";
import Select1 from "../../../../../../ui/selects/Select1";
import { setErrorsInput, switchForecastBy } from "../../../newIdeaSlice";

function ScenarioHeader({ desc, isConfirmed, data = null }) {
  const { isSubmitting, forecastBy } = useSelector((state) => state.newIdea);
  const dispatch = useDispatch();

  function handleChangeCC(e) {
    e.preventDefault();
    dispatch(switchForecastBy(e.target.value));
    dispatch(setErrorsInput());
  }

  return (
    <div
      className={`w-full grid grid-cols-2 h-10 rounded-full px-2 py-1 mb-4 ${
        desc === "Scenario" ? "px-6" : "border-b border-blue-950"
      } `}
    >
      <DescriptionSH desc={desc} />
      <div className="flex items-center justify-end">
        {!isSubmitting && !isConfirmed && (
          <Select1
            value={forecastBy}
            onChange={(e) => handleChangeCC(e)}
            type="ideaLineChart"
          >
            <option value="cagr">CAGR</option>
            <option value="custom">Custom</option>
          </Select1>
        )}
        <CtrlSH desc={desc} isConfirmed={isConfirmed} />
        {data && desc === "Scenario Overview" && (
          <Select1
            onChange={(e) => data.onChange(e)}
            value={data.item}
            type="ideaLineChart"
          >
            {data.vals.map((d, i) => (
              <option key={i} value={d}>
                {data.names[i]}
              </option>
            ))}
          </Select1>
        )}
      </div>
    </div>
  );
}

export default ScenarioHeader;
