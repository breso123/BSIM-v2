/* eslint-disable react/prop-types */
function RecomLegend({ col, value, t }) {
  const style = { backgroundColor: `${col}` };
  return (
    <div className="flex items-center gap-5 font-mono text-blue-950 text-lg">
      <div style={style} className="h-3 w-3 rounded-full"></div>
      <p className="w-48 flex items-center justify-between">
        <span className="italic">{t}</span>
        <span
          style={{
            color: col,
            textShadow: `2px 2px 4px ${col}75`,
          }}
          className="font-semibold"
        >
          {value}
        </span>
      </p>
    </div>
  );
}

export default RecomLegend;
