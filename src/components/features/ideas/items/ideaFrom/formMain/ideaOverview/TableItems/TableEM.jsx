/* eslint-disable react/prop-types */

import TableRow from "../../../formItems/TableRow";
import ScenarioHeader from "../../ScenarioHeader";
import TableRows9 from "./TableRows9";

function TableEM({ idea, scenario, isConfirmed }) {
  const vals = idea[scenario]?.values;
  const arr1T = ["value", "growth"];
  const arrPSF = ["item", "margin"];
  const arrEVEBT = ["evF", "multiple", "debtF", "dbtEb", "eqvF", "sharesF"];
  const arrEVEBF = ["sharesF", "eps", "multiple"];
  const arr2T = ["price", "wacc", "fv", "diff"];

  return (
    <div className="flex flex-col w-full ">
      <ScenarioHeader desc="" isConfirmed={isConfirmed} />
      <div className="w-full grid grid-cols-1 relative mb-2 font-sans shadow-hoverFins rounded-lg pb-2">
        <TableRow vals={vals} idea={idea} item="periods" />
        <div className="w-full h-64 overflow-scroll px-1">
          <TableRows9 arr={arr1T} vals={vals} idea={idea} />

          {idea.valuation !== "P/S" && (
            <TableRows9 arr={arrPSF} vals={vals} idea={idea} />
          )}
          <TableRows9
            arr={idea.valuation === "EV/EBITDA" ? arrEVEBT : arrEVEBF}
            vals={vals}
            idea={idea}
          />
          <TableRows9 arr={arr2T} vals={vals} idea={idea} />
        </div>
      </div>
    </div>
  );
}

export default TableEM;
