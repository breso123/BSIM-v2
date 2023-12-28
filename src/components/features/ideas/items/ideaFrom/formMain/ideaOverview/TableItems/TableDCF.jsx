/* eslint-disable react/prop-types */

import GridderPeriod from "../../../../../../../../ui/gridders/GridderPeriod";
import TableRow from "../../../formItems/TableRow";
import ScenarioHeader from "../../ScenarioHeader";
import TableRows9 from "./TableRows9";

function TableDCF({ idea, scenario, isConfirmed }) {
  const vals = idea[scenario]?.values.slice(0, -1);

  if (!idea || !vals) return;
  const { dcfSum, ivps } = idea[scenario];
  const { debt, cash, fas, nci, shares } = idea;
  const eqv = dcfSum + cash + fas - (debt ?? 0) - (nci ?? 0);
  const arr9 = ["value", "growth", "item", "margin", "wacc", "discounted"];

  return (
    <div className="flex flex-col gap-0 w-full ">
      <ScenarioHeader desc="" isConfirmed={isConfirmed} />
      <div className="w-full grid grid-cols-1 relative mb-2 font-sans shadow-hoverFins rounded-lg pb-2 ">
        <GridderPeriod periods={vals.map((v) => v.period)} type="ideaTable" />

        <div className="w-full h-64 overflow-scroll px-1">
          <TableRows9 arr={arr9} vals={vals} idea={idea} />
          <TableRow vals={vals} idea={idea} item="total" dcfSum={dcfSum} />
          <TableRow vals={vals} idea={idea} item="cash" dcfSum={cash} />
          <TableRow vals={vals} idea={idea} item="fas" dcfSum={fas} />
          <TableRow vals={vals} idea={idea} item="debt" dcfSum={debt} />
          <TableRow vals={vals} idea={idea} item="nci" dcfSum={nci} />
          <TableRow
            vals={vals}
            idea={idea}
            item="eqv"
            dcfSum={Math.trunc(eqv)}
          />
          <TableRow
            vals={vals}
            idea={idea}
            item="shares"
            dcfSum={Math.trunc(shares)}
          />
          <TableRow vals={vals} idea={idea} item="ivps" dcfSum={ivps} />
        </div>
      </div>
    </div>
  );
}

export default TableDCF;
