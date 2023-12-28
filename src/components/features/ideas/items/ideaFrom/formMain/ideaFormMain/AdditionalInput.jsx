/* eslint-disable react/prop-types */
import CtrlBtns from "../../formItems/CtrlBtns";
import Error from "../../formItems/Error";
import ScenarioForm from "../../formItems/ScenarioForm";

function AdditionalInput({ vals, type, fcst, errors }) {
  const avg = ["multi", "ebmg", "dbtEb"];
  const arr = [`${avg.some((a) => a === type) ? "average" : "cagr"}`, "custom"];
  return (
    <div
      className={`w-full flex flex-col items-center justify-between bg-slate-500/10 py-2 border-y border-blue-950 rounded-xl ${
        type === "ebmg" && "h-[7rem]"
      }`}
    >
      <ScenarioForm type={type} vals={vals} />
      <div className="w-full flex items-start justify-between ml-5">
        <CtrlBtns arr={arr} item={fcst} type={type} />
      </div>
      <Error errors={errors} />
    </div>
  );
}

export default AdditionalInput;
