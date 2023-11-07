function ScenarioLegend() {
  return (
    <div className="flex items-center gap-4 h-8 px-3 shadow-hoverFins rounded-full">
      <div className="flex items-center gap-1">
        <div className="h-4 w-4 rounded-full bg-blue-800"></div>
        <p className="text-xs font-mono tracking-wide italic">Actual</p>
      </div>
      <div className="flex items-center gap-1">
        <div className="h-4 w-4 rounded-full shadow-hoverFins"></div>
        <p className="text-xs font-mono tracking-wide italic">Estimate</p>
      </div>
      <div className="flex items-center gap-1">
        <div className="h-4 w-4 rounded-full bg-indigo-700/50"></div>
        <p className="text-xs font-mono tracking-wide italic">Discounted</p>
      </div>
    </div>
  );
}

export default ScenarioLegend;
