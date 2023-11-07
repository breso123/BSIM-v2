/* eslint-disable react/prop-types */
import TableRow from "../../formItems/TableRow";
import ScenarioHeader from "../ScenarioHeader";

function TableDCF({ idea, scenario, isConfirmed }) {
  if (!idea) return;
  const vals = idea[scenario].values.slice(0, -1);
  const { dcfSum, ivps } = idea[scenario];
  const { debt, cash, fas, nci, shares } = idea;
  const eqv = dcfSum + cash + fas - (debt ?? 0) - (nci ?? 0);

  return (
    <div className="flex flex-col gap-6 w-full">
      <ScenarioHeader desc="DCF Table" isConfirmed={isConfirmed} />
      <div className="w-full grid grid-cols-1 relative mb-2 font-sans border border-blue-950/10">
        <TableRow vals={vals} item="periods" />
        <TableRow vals={vals} item="value" />
        <TableRow vals={vals} item="wacc" />
        <TableRow vals={vals} item="discounted" />
        <TableRow vals={vals} item="total" dcfSum={dcfSum} />
        <TableRow vals={vals} item="cash" dcfSum={cash} />
        <TableRow vals={vals} item="fas" dcfSum={fas} />
        <TableRow vals={vals} item="debt" dcfSum={debt} />
        <TableRow vals={vals} item="nci" dcfSum={nci} />
        <TableRow vals={vals} item="eqv" dcfSum={Math.trunc(eqv)} />
        <TableRow vals={vals} item="shares" dcfSum={Math.trunc(shares)} />
        <TableRow vals={vals} item="ivps" dcfSum={ivps} />
      </div>
    </div>
  );
}

export default TableDCF;
