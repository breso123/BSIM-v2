/* eslint-disable react/prop-types */

function ScoreControlItem({ children, item, opacity, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`h-16 w-36 py-1 flex flex-col items-center justify-between hover:cursor-pointer hover:bg-slate-300/25 transition-all duration-300 ${opacity}`}
    >
      <p className="text-sm text-blue-950 font-semibold">{item}</p>
      {children}
    </div>
  );
}

export default ScoreControlItem;
