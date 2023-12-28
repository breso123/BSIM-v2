import { useDispatch, useSelector } from "react-redux";
import { setErrorsInput, switchForecastBy } from "../../../../newIdeaSlice";

function SelectCC() {
  const { forecastBy } = useSelector((state) => state.newIdea);
  const dispatch = useDispatch();
  function handleChange(e) {
    e.preventDefault();
    dispatch(switchForecastBy(e.target.value));
    dispatch(setErrorsInput());
  }

  return (
    <select
      onChange={(e) => handleChange(e)}
      value={forecastBy}
      className="bg-white/10 border-x px-3 text-blue-950 italic border-blue-950 rounded-full"
    >
      <option value="cagr">CAGR</option>
      <option value="custom">Custom</option>
    </select>
  );
}

export default SelectCC;
