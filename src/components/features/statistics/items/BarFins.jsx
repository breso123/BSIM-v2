import BarFinsInner from "./BarFinsInner";

/* eslint-disable react/prop-types */
function BarFins({ fs, onSetItemIndex, onSetCagr }) {
  return (
    <div className="h-full w-1/2 flex items-center justify-center">
      <div className="h-full w-[80%] flex flex-col items-center justify-center gap-3">
        {fs?.map((stat, i, arr) => {
          const max = Math.max(...arr.map((a) => Math.abs(a.value)));

          return (
            <BarFinsInner
              key={i}
              index={i}
              stat={stat}
              max={max}
              onSetItemIndex={onSetItemIndex}
              onSetCagr={onSetCagr}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BarFins;
