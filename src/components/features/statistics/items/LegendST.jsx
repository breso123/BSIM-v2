/* eslint-disable react/prop-types */

function LegendST({ values = [], colors }) {
  return (
    <div className="flex gap-4 p-0+4 rounded-lg shadow-hoverFins px-2 py-1">
      {colors.map((col, i) => {
        return (
          <div key={i} className="flex items-center gap-1 text-xs">
            <div
              style={{ backgroundColor: col }}
              className="bg-blue-950 rounded-full h-1 w-5"
            ></div>
            <p>{values[i]}</p>
          </div>
        );
      })}
    </div>
  );
}

export default LegendST;
