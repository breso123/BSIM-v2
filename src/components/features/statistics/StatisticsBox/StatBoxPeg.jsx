/* eslint-disable react/prop-types */
import { setMultipleRating } from "../../../../helpers/miscFuncs";
import Box from "../../../../ui/box/Box";
import BarPEG from "../items/BarPEG";

import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";

function StatBoxPeg({ val, logo }) {
  const rating = setMultipleRating(val?.peg_ratio, [0, 1, 2, 3, 4, 5]);

  return (
    <Box type="peg">
      <StatBoxHeader title="PEG Ratio" />
      <StatBoxMain>
        <BarPEG peg={val?.peg_ratio} src={logo} />

        <p
          style={{ color: rating?.col }}
          className="absolute top-[80%] left-[2%] font-serif text-sm font-semibold "
        >
          {rating?.val}
        </p>
      </StatBoxMain>
    </Box>
  );
}

export default StatBoxPeg;
