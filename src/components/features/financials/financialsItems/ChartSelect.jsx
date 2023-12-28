/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { switchSupportItem } from "../financialsSlice.js";
import Select1 from "../../../../ui/selects/Select1.jsx";

function ChartSelect({ item, financialsKey, supportItem }) {
  const dispatch = useDispatch();

  function itemManagement(e) {
    e.preventDefault();
    if (e.target.value === "% Growth") dispatch(switchSupportItem("G"));
    if (e.target.value === "% Margin") dispatch(switchSupportItem("M"));
    else dispatch(switchSupportItem(e.target.value));
  }

  function marginKW() {
    if (financialsKey === "income_statement") return "Revenue";
    if (financialsKey === "balance_sheet") return "Assets";
    if (financialsKey === "cash_flow") return "Total Inflows";
  }

  return (
    <Select1
      value={supportItem}
      onChange={(e) => itemManagement(e)}
      type="finItemType"
    >
      <option value="G">% Growth</option>
      <option value="M">% of {marginKW()}</option>
      {item === "tas" && <option value="roa">% ROA</option>}
      {item === "tseq" && <option value="roe">% ROE</option>}
      {item === "cptE" && <option value="roce">% ROCE</option>}
      {item === "cptT" && <option value="rotce">% ROTCE</option>}
      {item === "tngB" && <option value="rota">% ROTA</option>}
      {item === "ocfl" && <option value="ocflMg">% of Revenue</option>}
    </Select1>
  );
}

export default ChartSelect;
