/* eslint-disable react/prop-types */
import Box from "../../../../ui/box/Box";
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
    <Box type="classic">
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
    </Box>
  );
}

export default StatBoxShares;
