/* eslint-disable react/prop-types */
import { useState } from "react";
import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";
import Oscillator from "../items/Oscillator";
import {
  setMultipleRating,
  setValuationTick,
} from "../../../../helpers/miscFuncs";

const inputPairs = [
  ["Trailing P/E", "trailing_pe", [10, 20, 30, 40, 50, 60]],
  ["Forward P/E", "forward_pe", [10, 20, 30, 40, 50, 60]],
  ["Price-to-sales(P/S)", "price_to_sales_ttm", [2, 4, 6, 8, 10, 12]],
  ["Price-to-book(P/B)", "price_to_book_mrq", [4, 8, 12, 16, 20, 24]],
  ["EV / Revenue", "enterprise_to_revenue", [2, 4, 6, 8, 10, 12]],
  ["EV / EBITDA", "enterprise_to_ebitda", [10, 20, 30, 40, 50, 60]],
];

function StatBoxMulti({ val }) {
  const [inputEl, setInputEl] = useState("Trailing P/E");
  //const { valuation: val } = JSON.parse(localStorage.getItem("statistics"));
  const multiplePos = inputPairs.find((p) => p[0] === inputEl)[1];
  const multipleOpts = inputPairs.find((p) => p[0] === inputEl)[2];
  const multiple = val?.[multiplePos];
  const rotation = setValuationTick(multiple, multipleOpts);
  const rating = setMultipleRating(multiple, multipleOpts);

  return (
    <div className="flex flex-col items-center justify-center h-72 w-[95%] mb-2 mt-1 p-2 bg-indigo-200/25 relative shadow-statPrice">
      <StatBoxHeader
        onSetInputEl={setInputEl}
        inputEl={inputEl}
        input={[
          "Trailing P/E",
          "Forward P/E",
          "Price-to-sales(P/S)",
          "Price-to-book(P/B)",
          "EV / Revenue",
          "EV / EBITDA",
        ]}
        title="Valuation Multiples"
      />
      <StatBoxMain>
        <Oscillator rotation={rotation} rating={rating} />
        <div className="flex flex-col items-center gap-1 absolute top-[70%]">
          <p className="text-xl text-stone-900/80 font-semibold tracking-widest">
            {multiple?.toFixed(1)}x
          </p>
          <p
            className="text-sm font-semibold italic font-sans"
            style={{ color: `${rating?.col}` }}
          >
            {!multiple || multiple < 1 ? "Negative" : rating?.val}
          </p>
        </div>
      </StatBoxMain>
    </div>
  );
}

export default StatBoxMulti;
