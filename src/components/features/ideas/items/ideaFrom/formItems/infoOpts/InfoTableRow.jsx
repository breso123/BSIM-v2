/* eslint-disable react/prop-types */
import { getTableTitle } from "../../../../helpers/stringers";
import { getItem } from "../../../../helpers/tableData";

import useActualValues from "../useActualValues";
import InfoTable from "./InfoTable";

function InfoTableRow({ val, type }) {
  const { periods, revenue, growth } = useActualValues(type, val);
  const item = getItem(val);
  const tabTitle = getTableTitle(type, item, val);
  return (
    <div
      className={`w-[80%] grid grid-cols-1 relative ml-1 my-6 px-2 py-1 font-sans border-y-2 border-blue-800 rounded-lg pb-4 shadow-statPrice`}
    >
      <InfoTable arr={periods} item="Periods" str={tabTitle[1]} />
      <InfoTable arr={revenue} item="Value" str={tabTitle[1]} />
      {type !== "multi" && (
        <InfoTable
          arr={growth}
          item={
            type === "ebmg"
              ? "Margin"
              : `${type === "dbtEb" ? "Debt/EBITDA" : "Growth"}`
          }
          str={tabTitle[1]}
        />
      )}
      <p className="absolute top-[-25px] left-4 text-xs italic text-sky-800">
        {tabTitle[0]}
      </p>
    </div>
  );
}

export default InfoTableRow;
