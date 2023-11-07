/* eslint-disable react/prop-types */
import { formatInterface2 } from "../../../../../helpers/formatters";

function GridderCnt({ data, type }) {
  return (
    <div className={`w-[75%] grid grid-cols-10`}>
      {data?.map((d, i, arr) => (
        <p key={i} className={"w-full text-center"}>
          {type === "header" && (i === arr.length - 1 ? "TVA" : d.period)}
          {type === "basic" &&
            formatInterface2(Math.trunc(d.value), i === arr.length - 1)}
          {type === "wacc" && (d.wacc * 100).toFixed(1)}
          {type === "dcf" &&
            formatInterface2(Math.trunc(d.discounted), i === arr.length - 1)}
        </p>
      ))}
    </div>
  );
}

export default GridderCnt;
