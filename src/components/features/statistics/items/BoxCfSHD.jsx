import { useState } from "react";
import CfBarLower from "./CfBarLower";
import CfBarUpper from "./CfBarUpper";
import CfItem from "./CfItem";
import CfItemHeader from "./CfItemHeader";

/* eslint-disable react/prop-types */
function BoxCfSHD({ title, data }) {
  const [tgtIndex, setTgtIndex] = useState(null);
  const cols = ["bg-blue-950", "bg-cyan-600", "bg-blue-700"];

  return (
    <div className="flex flex-col gap-5 items-center self-start justify-center relative w-full mb-10">
      <h4 className="text-blue-950/75 text-[1.05rem] font-semibold">{title}</h4>
      <div className="w-[20rem] h-[4rem]  flex flex-col gap-1 items-center">
        <CfBarUpper onSetTgtIndex={setTgtIndex} />
        <div className="h-1/2 w-full flex items-center gap-1">
          {data?.slice(1).map((d, i) => (
            <CfBarLower
              onSetTgtIndex={setTgtIndex}
              col={cols[i + 1]}
              key={i}
              index={i}
              d={d}
              total={data[0].value}
            />
          ))}
        </div>
      </div>
      <CfItemHeader />
      <div className="w-[20rem] mt-12 grid grid-cols-1 items-center justify-items-center gap-y-1">
        {data?.map((d, i) => {
          return (
            <CfItem tgtIndex={tgtIndex} key={i} col={cols[i]} d={d} i={i} />
          );
        })}
      </div>
    </div>
  );
}

export default BoxCfSHD;
