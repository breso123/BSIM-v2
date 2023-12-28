/* eslint-disable react/prop-types */
function LegendOV({ data }) {
  return (
    <div className="absolute top-14 h-7 shadow-hoverFins rounded-full flex items-center justify-evenly gap-7 px-2 bg-slate-200/50 ml-2">
      {data.map((d, i) => {
        return (
          <div key={i} className="flex items-center gap-2 text-xs">
            {d.length === 3 ? (
              <>
                <div className={`h-3 w-3 rounded-full ${d[1]}`}></div>
                {"/"}
                <div className={`h-3 w-3 rounded-full ${d[2]}`}></div>
              </>
            ) : (
              <div className={`h-3 w-3 rounded-full ${d[1]}`}></div>
            )}
            <p>{d[0]}</p>
          </div>
        );
      })}
    </div>
  );
}

export default LegendOV;
