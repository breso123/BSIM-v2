/* eslint-disable react/prop-types */
import TechnicalsDonut from "./TechnicalsDonut";
import TechnicalsNav from "./TechnicalsNav";
import TechnicalsLegend from "./TechnicalsLegend";
import { useActionArray } from "./useActionArray";

function TechnicalsChart() {
  const actions = useActionArray();
  const buy = actions.filter((act) => act === "Buy").length;
  const sell = actions.filter((act) => act === "Sell").length;
  const ntrl = actions.filter((act) => act === "Neutral").length;
  const all = buy + sell + ntrl;
  const allPerc = [buy, sell, ntrl].map((act) => act / all);

  return (
    <div className="w-1/2 relative h-full flex flex-col items-center justify-start">
      <TechnicalsNav />
      <TechnicalsDonut data={allPerc} />
      <div className="flex flex-col items-start justify-center gap-1 font-semibold w-[8rem] bg-indigo-300/50 shadow-statPrice text-[0.8rem]  h-[5rem] px-4 rounded-lg absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <TechnicalsLegend value={buy} title="Buy" col="blue-950" />
        <TechnicalsLegend value={sell} title="Sell" col="orange-700" />
        <TechnicalsLegend value={ntrl} title="Neutral" col="stone-700" />
      </div>
    </div>
  );
}

export default TechnicalsChart;
