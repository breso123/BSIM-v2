import { useDispatch } from "react-redux";
import {
  switchChart,
  switchFcstDbtEb,
  switchFcstEbmg,
  switchFcstMulti,
  switchFcstShares,
  switchIvpsDisplay,
  switchLcDisplay,
  switchSelectedIdea,
  switchSensDisplay,
  switchView,
} from "../../../newIdeaSlice";
import { switchScenario } from "../../../ideasSlice";

/* eslint-disable react/prop-types */
function BtnDC({ dc, ivpsDisplay, i, type }) {
  const dispatch = useDispatch();
  const noRounds = [
    "text-blue-700 font-semibold italic tracking-wider",
    "text-blue-950 tracking-wider",
  ];
  const rounds = [
    "bg-indigo-300 text-blue-950 font-bold italic",
    "bg-indigo-100",
  ];

  const styles = {
    ivps: rounds,
    chart: rounds,
    table: rounds,
    disp: noRounds,
    sc: noRounds,
    view: noRounds,
    sc2: noRounds,
    shares: rounds,
    multi: rounds,
    ebmg: rounds,
    dbtEb: rounds,
    sens: rounds,
  };

  function handleClick(e) {
    e.preventDefault();
    type === "ivps" && dispatch(switchIvpsDisplay(dc));
    type === "disp" && dispatch(switchLcDisplay(dc));
    ["sc", "table"].some((i) => i === type) &&
      dispatch(switchSelectedIdea(dc.toLowerCase()));
    type === "chart" && dispatch(switchChart(dc));
    type === "view" && dispatch(switchView(dc));
    type === "sc2" && dispatch(switchScenario(dc.toLowerCase()));
    type === "shares" && dispatch(switchFcstShares(dc));
    type === "multi" && dispatch(switchFcstMulti(dc));
    type === "ebmg" && dispatch(switchFcstEbmg(dc));
    type === "dbtEb" && dispatch(switchFcstDbtEb(dc));
    type === "sens" && dispatch(switchSensDisplay(dc));
    dc === "Setup" && dispatch(switchSelectedIdea("realistic"));
  }

  return (
    <button
      onClick={(e) => handleClick(e)}
      className={`w-[5rem] h-[80%] text-xs rounded-${
        i === 0 ? "l" : "r"
      }-full ${dc === ivpsDisplay ? styles[type][0] : styles[type][1]}`}
    >
      {dc}
    </button>
  );
}

export default BtnDC;
