/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import CtrlBtns from "../../formItems/CtrlBtns";

function CtrlSH({ desc, isConfirmed }) {
  const { scenario } = useSelector((state) => state.ideas);
  const { selectedIdea, ivpsDisplay } = useSelector((state) => state.newIdea);
  const scenarios = ["Optimistic", "Realistic", "Pessimistic"];
  const dispIV = ["Diff", "CAGR"];
  const si = selectedIdea[0].toUpperCase() + selectedIdea.slice(1);
  const si2 = scenario[0].toUpperCase() + scenario.slice(1);

  return (
    <>
      {["", "Revenue & Profit", "Sensitivity Analysis"].some(
        (el) => el === desc
      ) && (
        <CtrlBtns
          arr={scenarios}
          item={!isConfirmed ? si : si2}
          type={!isConfirmed ? "sc" : "sc2"}
        />
      )}
      {desc === "Intrinsic Values per Share" && (
        <CtrlBtns arr={dispIV} item={ivpsDisplay} type="ivps" />
      )}
    </>
  );
}

export default CtrlSH;
