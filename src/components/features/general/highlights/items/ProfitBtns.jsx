import { useState } from "react";
import ProfitBtn from "./ProfitBtn";

/* eslint-disable react/prop-types */
const kwsRP = [
  ["gross", "gpr", "gprM"],
  ["ebitda", "eb", "ebM"],
  ["operating", "oin", "oinM"],
  ["pre-tax", "pin", "pinM"],
  ["net", "nin", "ninM"],
];

function ProfitBtns({ onClick }) {
  const [selectedFeature, setSelectedFeature] = useState(kwsRP[0]);

  function handleClick(e, kw) {
    e.preventDefault();
    setSelectedFeature(kw);
    onClick(e);
  }
  return (
    <div
      style={{ boxShadow: "1px 1px 1px midnightblue" }}
      className="h-[3-rem] w-full flex items-center justify-between px-2 border-b border-blue-950 rounded-lg "
    >
      <p className="italic text-blue-900">Revenue & Profit</p>
      <div className="grid grid-cols-5 gap-5 italic font-semibold text-blue-900/75 text-sm">
        {kwsRP.map((kw, i) => (
          <ProfitBtn
            key={i}
            isSelected={selectedFeature === kw}
            kw={kw}
            onClick={(e) => handleClick(e, kw)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfitBtns;
