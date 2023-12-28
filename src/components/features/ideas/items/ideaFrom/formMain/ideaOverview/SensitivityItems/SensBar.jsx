import { formatPercentage } from "../../../../../../../../helpers/formatters";

/* eslint-disable react/prop-types */
function SensBar({ item, idea, type }) {
  const styles = {
    coe: [
      "shadow-sensitivityX bg-pink-300/50 rounded-lg",
      "w-24 h-6 text-fuchsia-900",
    ],
    gr: ["flex-col shadow-sensitivityY bg-blue-600/25 rounded-xl", "w-12 h-8"],
  };

  return (
    <div className={`flex items-center justify-center ${styles[type][0]}`}>
      {item.map((c, i) => (
        <p
          key={i}
          className={`text-xs font-semibold italic drop-shadow-gridderInd flex items-center justify-center ${styles[type][1]}`}
        >
          {type === "coe" && formatPercentage(c)}
          {type === "gr" &&
            (idea.valuation === "DCF" ? formatPercentage(c) : c.toFixed(1))}
        </p>
      ))}
    </div>
  );
}

export default SensBar;
