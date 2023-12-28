/* eslint-disable react/prop-types */
import { getTgtScenarioPers } from "../../../../helpers/newIdeaMisc";
import TableRow from "../../formItems/TableRow";
import ItemEA from "./EstimateActual/ItemEA";

function TableEVA({ idea }) {
  const { realistic, valuation: val } = idea;
  const tgtRealistic = getTgtScenarioPers(realistic, val);

  return (
    <div className="w-[80%] grid grid-cols-1 relative mb-2 my-6 font-sans border-y-2 border-blue-950 rounded-lg pb-4">
      <TableRow vals={tgtRealistic} idea={idea} item="periods" ae={true} />
      <div className="w-full flex flex-col gap-6 px-2">
        {val !== "DCF" && (
          <ItemEA item="price" idea={idea} title="Stock Price" val={val} />
        )}
        <ItemEA item="value" idea={idea} title="Revenue" val={val} />
        {val !== "P/S" && (
          <ItemEA item="item" idea={idea} title="Free Cash Flow" val={val} />
        )}
      </div>
    </div>
  );
}

export default TableEVA;
