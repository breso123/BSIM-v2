import { stylesSC } from "../../../../helpers/tableStyles";

/* eslint-disable react/prop-types */
function ScenarioCardHeader({ scenario, ivps }) {
  return (
    <div className="h-[10%] w-full flex items-center justify-between italic">
      <p
        className={`text-xs font-serif font-semibold tracking-wider ${stylesSC[scenario][1]}`}
      >
        {scenario[0].toUpperCase() + scenario.slice(1)}
      </p>
      <p className="text-xl drop-shadow-gridderInd font-mono tracking-wider text-blue-950">
        {ivps.toFixed(2)}
      </p>
    </div>
  );
}

export default ScenarioCardHeader;
