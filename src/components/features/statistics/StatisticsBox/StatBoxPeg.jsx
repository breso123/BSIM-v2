/* eslint-disable react/prop-types */
import { setMultipleRating } from "../../../../helpers/miscFuncs";
import BarPEG from "../items/BarPEG";

import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";

function StatBoxPeg({ val, logo }) {
  //const { valuation: val, logo } = JSON.parse(
  //  localStorage.getItem("statistics")
  //);
  const rating = setMultipleRating(val?.peg_ratio, [0, 1, 2, 3, 4, 5]);

  return (
    <div className="flex flex-col items-center justify-start h-56 w-[95%] mb-2 mt-1 p-2 bg-gradient-to-r to-orange-100/25 from-indigo-200/25 relative shadow-statPrice col-span-2">
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
    </div>
  );
}

export default StatBoxPeg;
