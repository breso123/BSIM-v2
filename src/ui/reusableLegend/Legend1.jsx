/* eslint-disable react/prop-types */
function Legend1({ type, data }) {
  const styles = {
    leg1: "flex items-center justify-center gap-6 bg-pink-100/20 text-sm m-1 px-3 py-2 rounded-full",
    leg2: "absolute top-14 h-7 shadow-hoverFins rounded-full flex items-center justify-evenly gap-7 px-2 bg-slate-200/50 ml-2",
    leg3: "flex gap-4 rounded-lg shadow-hoverFins px-2 py-1",
  };

  const stylesInner = {
    leg1: "gap-2",
    leg2: "text-xs",
    leg3: "gap-1 text-xs",
  };

  return (
    <div className={styles[type]}>
      {data.map((d, i) => (
        <div
          key={i}
          className={`flex items-center justify-center gap-2 ${stylesInner[type]}`}
        >
          {Array.isArray(d.color) ? (
            <>
              <div className={`w-3 h-3 ${d.color[0]} rounded-full`}></div>
              <p>/</p>
              <div className={`w-3 h-3 ${d.color[1]} rounded-full`}></div>
            </>
          ) : (
            <div className={`w-3 h-3 ${d.color} rounded-full`}></div>
          )}

          <p>{d.item}</p>
        </div>
      ))}
    </div>
  );
}

export default Legend1;
