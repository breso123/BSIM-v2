/* eslint-disable react/prop-types */
function GridderPeriod({ periods, type }) {
  const styles = {
    fins: "h-[3rem] px-3 grid grid-cols-2 w-[99%] bg-indigo-900 items-center rounded-2xl text-sky-200/75 font-semibold mb-4 shadow-hoverFins2 font-mono",
    ideaTable:
      "w-full h-8 grid grid-cols-2 px-2 mb-1 bg-blue-950 text-indigo-200 italic rounded-lg",
  };

  const stylesPar = {
    fins: "pl-6",
    ideaTable: "w-full h-full flex items-center justify-start text-xs",
  };

  const stylesPars = {
    fins: "text-sm",
    ideaTable: "text-xs",
  };

  const gtc = type === "ideaTable" ? "1fr 3fr" : "1fr 2fr";

  return (
    <div style={{ gridTemplateColumns: gtc }} className={styles[type]}>
      <p className={stylesPar[type]}>USD in millions</p>
      <div className="grid grid-cols-9">
        {periods.map((p, i) => (
          <p
            className={`flex items-center justify-center ${stylesPars[type]}`}
            key={i}
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

export default GridderPeriod;
