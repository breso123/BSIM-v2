/* eslint-disable react/prop-types */
import TableDCF from "./TableItems/TableDCF";
import TableEM from "./TableItems/TableEM";
import TableHeaderData from "./TableItems/TableHeaderData";

function Table({ idea, scenario, isConfirmed, translate }) {
  const chDCF = idea.valuation === "DCF";
  const transform = { transform: `translate(${translate})` };

  return (
    <div
      style={transform}
      className="w-full h-full flex flex-col gap-2 px-1 relative transition-all duration-300"
    >
      {chDCF ? (
        <TableDCF idea={idea} scenario={scenario} isConfirmed={isConfirmed} />
      ) : (
        <TableEM idea={idea} scenario={scenario} isConfirmed={isConfirmed} />
      )}
      <TableHeaderData idea={idea} chDCF={chDCF} />
    </div>
  );
}

export default Table;
