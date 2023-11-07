/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Transaction({ options }) {
  const description = options.description;
  const descFiltered = description.split(" ").filter((w) => parseInt(w));
  const action = description.split(" ")[0];
  const style = {
    header: [
      "shadow-hoverFins",
      "font-semibold text-indigo-950 text-lg font-serif italic",
      "text-blue-950 tracking-wide text-sm font-semibold",
      "text-blue-950",
      "font-serif text font-semibold text-blue-950/90",
      null,
      "pl-4 font-semibold text-center",
    ],
    item: [
      "hover:shadow-buttons",
      "text-sm text-left text-indigo-950 font-semibold",
      "text-xs font-semibold text-blue-950",
      "text-sm",
      `text-xs ${
        action.toLowerCase() === "sale" ? "text-orange-700" : "text-blue-700"
      }`,
      "text-xs",
      "text-xs pl-4",
    ],
  };

  return (
    <div
      className={`flex items-center text-center justify-center w-[90%] px-10 py-2 rounded-full group ${
        style[options.type][0]
      }`}
    >
      <p className={`w-[20%] ${style[options.type][1] ?? ""}`}>
        {options.name}
      </p>
      <p className={`w-[20%] ${style[options.type][2] ?? ""}`}>{options.pos}</p>
      <div
        className={`flex items-center font-sans justify-center gap-2 w-[15%] text-blue-900 ${
          style[options.type][3] ?? ""
        }`}
      >
        <p className="w-1/2 italic">{options.shares}</p>
        <p className="w-1/2 font-semibold">{options.value}</p>
      </div>
      <p className={`w-[25%] ${style[options.type][4] ?? ""}`}>
        {action} {descFiltered.join(" - ")}
      </p>
      <p className={`w-[10%] font-mono ${style[options.type][5] ?? ""}`}>
        {options.date}
      </p>
      <p
        className={`w-[10%] uppercase text-xs text-center font-mono ${
          style[options.type][6] ?? ""
        }`}
      >
        {options.isDirect}
      </p>
    </div>
  );
}

export default Transaction;
