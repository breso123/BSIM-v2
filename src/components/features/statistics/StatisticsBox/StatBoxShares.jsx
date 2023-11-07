/* eslint-disable react/prop-types */
import ReusableCirc from "../items/ReusableCirc";
import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";

import { useState } from "react";

function StatBoxShares({ pv }) {
  const [inputEl, setInputEl] = useState("shares_outstanding");
  const val = pv?.[inputEl === "total" ? "shares_outstanding" : inputEl];
  const sdoVal =
    inputEl === "short_ratio" ? val / 100 : val / pv?.shares_outstanding;

  return (
    <div className="flex flex-col items-center justify-center h-72 w-[95%] mb-2 mt-1 p-2 bg-indigo-200/25 relative shadow-statPrice">
      <StatBoxHeader
        onSetInputEl={setInputEl}
        inputEl={inputEl}
        input={[
          "shares_outstanding",
          "float_shares",
          "shares_short",
          "short_ratio",
        ]}
        title="Shares Data"
      />
      <StatBoxMain>
        <ReusableCirc val={val} sdoVal={sdoVal} inputEl={inputEl} />
      </StatBoxMain>
    </div>
  );
}

export default StatBoxShares;
