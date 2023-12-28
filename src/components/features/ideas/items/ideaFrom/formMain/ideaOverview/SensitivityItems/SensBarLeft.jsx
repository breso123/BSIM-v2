/* eslint-disable react/prop-types */
import SensBar from "./SensBar";

function SensBarLeft({ idea, gr }) {
  return (
    <div className="flex items-center justify-center gap-2 absolute left-[-65px] top-[2.5rem]">
      <p className="absolute left-[-120px] rotate-[-90deg] w-48 text-center text-xs text-blue-950/80 font-semibold italic">
        {idea.valuation === "DCF" ? "Growth (%)" : `${idea.valuation} (X)`}
      </p>
      <SensBar item={gr} idea={idea} type="gr" />
    </div>
  );
}

export default SensBarLeft;
