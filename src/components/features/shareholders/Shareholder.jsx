/* eslint-disable react/prop-types */
function Shareholder({ options }) {
  const styles = {
    item: [
      "hover:shadow-hoverFins",
      "text-xs",
      "text-sm",
      "text-sm",
      "text-xs",
    ],
    header: [
      "shadow-buttons",
      "font-semibold",
      "font-sans tracking-wide italic",
      "text-xs font-semibold",
      "",
    ],
    total: [
      "border-y-2 border-blue-950 rounded-lg text-sm font-semibold bg-indigo-300/50",
    ],
  };

  return (
    <div
      className={`flex items-center justify-center w-full px-10 py-2 rounded-full group ${
        styles[options.type][0] ?? ""
      }`}
    >
      <p
        className={`font-serif tracking-wide text-stone-900 w-[45%] text-left ${
          styles[options.type][1] ?? ""
        }`}
      >
        {options.name}
      </p>
      <div
        className={`w-[15%] text-center flex items-center justify-center gap-4 text-blue-800 ${
          styles[options.type][2] ?? ""
        }`}
      >
        <p className="w-1/2">{options.shares}</p>
        <p className="w-1/2 font-semibold text-blue-900">{options.value}</p>
      </div>
      <div
        className={`w-[15%] ml-16 text-center flex items-center justify-center gap-4 italic text-purple-950  ${
          styles[options.type][3] ?? ""
        }`}
      >
        <p className="w-1/2 text-purple-800">{options.percent}</p>
        <p className="w-1/2">{options.weight}</p>
      </div>
      <p className={`font-mono text-right w-[15%] ${styles[options.type][4]}`}>
        {options.date}
      </p>
    </div>
  );
}

export default Shareholder;
