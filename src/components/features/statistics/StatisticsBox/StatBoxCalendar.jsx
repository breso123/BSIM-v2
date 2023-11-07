/* eslint-disable react/prop-types */
import { useState } from "react";
import Calendar from "../items/Calendar";
import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";
import { itemStringed } from "../../../../helpers/formatters";

function StatBoxCalendar({ pv }) {
  const [inputEl, setInputEl] = useState("Dividend Date");
  const inputVal = itemStringed(inputEl);

  return (
    <div className="flex flex-col items-center justify-center h-72 w-[95%] mb-2 mt-1 p-2 bg-indigo-200/25 relative shadow-statPrice">
      <StatBoxHeader
        title="Relevant Dates"
        inputEl={inputEl}
        onSetInputEl={setInputEl}
        input={["Dividend Date", "Ex Dividend Date", "Last Split Date"]}
      />
      <StatBoxMain>
        <Calendar date={pv?.[inputVal]} lsd={pv?.last_split_factor} />
      </StatBoxMain>
    </div>
  );
}

export default StatBoxCalendar;
