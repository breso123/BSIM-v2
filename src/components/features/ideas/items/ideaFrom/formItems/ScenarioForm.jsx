/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import Info from "./Info";
import { stylesSF } from "../../../helpers/tableStyles";
import { getLabelText } from "../../../helpers/stringers";
import { getFcstBy } from "../../../helpers/newIdeaMisc";
import InputCustom from "./NewIdeaForm/InputCustom";
import InputCagr from "./NewIdeaForm/InputCagr";

function ScenarioForm({ type, onClick }) {
  const newIdea = useSelector((state) => state.newIdea);
  const label = getLabelText(type, newIdea);
  const chSC = ["optimistic", "realistic", "pessimistic"].some(
    (t) => type === t
  );
  const fcst = getFcstBy(chSC, type, newIdea);

  return (
    <div
      onClick={onClick}
      className={`w-full h-8 px-6 grid grid-cols-2 items-center mb-2 ${
        stylesSF[type][2] || ""
      }`}
      style={{ gridTemplateColumns: "1fr 4fr" }}
    >
      <div
        className={`font-semibold italic font-sans flex items-center justify-between px-2 gap-3 tracking-wide text-xs ${stylesSF[type][0]}`}
      >
        <span>{label}</span>
        {!chSC && <Info type={type} val={newIdea.valuation} />}
      </div>
      {fcst === "custom" ? (
        <InputCustom type={type} newIdea={newIdea} />
      ) : (
        <InputCagr type={type} value={newIdea[`${type}CAGR`]} />
      )}
    </div>
  );
}

export default ScenarioForm;
