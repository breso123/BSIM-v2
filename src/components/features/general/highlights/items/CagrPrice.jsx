/* eslint-disable react/prop-types */
import { useState } from "react";
import CagrHead from "./CagrHead";
import CircleReused from "../../../../../ui/circle/CircleReused";

function CagrPrice({ priceCagr }) {
  const [cagr, setCagr] = useState(1);
  const cagrPer = priceCagr[`${cagr}Y`];

  function handleChange(e) {
    e.preventDefault();
    setCagr(e.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center w-1/3 ">
      <CagrHead
        onChange={(e) => handleChange(e)}
        value={cagr}
        cagrRev={priceCagr}
        title="Return per Annum (%)"
      />
      <CircleReused num={cagrPer} svgSize={300} strokeWidth={5} sdo={630} />
    </div>
  );
}

export default CagrPrice;
