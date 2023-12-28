/* eslint-disable react/prop-types */

import BarFins from "../items/BarFins";
import TableFins from "../items/TableFins";
import StatBoxHeader from "./StatBoxHeader";
import Cagr3 from "../items/Cagr3";
import { useState } from "react";
import Box from "../../../../ui/box/Box";

function StatBoxFins({ fs, title }) {
  const [itemIndex, setItemIndex] = useState(null);
  const [cagr, setCagr] = useState(null);

  return (
    <Box type="fins">
      <StatBoxHeader title={title} />
      <Cagr3 cagr={cagr} />
      <div className="h-[80%] w-full flex">
        <TableFins fs={fs} itemIndex={itemIndex} />
        <BarFins fs={fs} onSetCagr={setCagr} onSetItemIndex={setItemIndex} />
      </div>
    </Box>
  );
}

export default StatBoxFins;
