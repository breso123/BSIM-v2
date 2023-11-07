/* eslint-disable react/prop-types */

import BarFins from "../items/BarFins";
import TableFins from "../items/TableFins";
import StatBoxHeader from "./StatBoxHeader";
import Cagr3 from "../items/Cagr3";
import { useState } from "react";

function StatBoxFins({ fs, title }) {
  const [itemIndex, setItemIndex] = useState(null);
  const [cagr, setCagr] = useState(null);
  const sdo = (1 - (cagr < 0 ? Math.abs(cagr) : cagr)) * 275;

  return (
    <div className="flex flex-col justify-between h-96 w-[95%] mb-2 mt-1 p-2 bg-gradient-to-r to-orange-100/25 from-indigo-200/25 relative shadow-statPrice">
      <StatBoxHeader title={title} />
      <Cagr3 cagr={cagr} sdo={sdo} />
      <div className="h-[80%] w-full flex">
        <TableFins fs={fs} itemIndex={itemIndex} />
        <BarFins fs={fs} onSetCagr={setCagr} onSetItemIndex={setItemIndex} />
      </div>
    </div>
  );
}

export default StatBoxFins;
