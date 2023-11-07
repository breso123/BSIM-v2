/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import ReusableSVG from "../../../../../reusableSVG/ReusableSVG";

function ScenarioCard({ scenario, idea }) {
  const styles = {
    optimistic: ["bg-blue-200/25", "text-blue-800"],
    realistic: ["bg-stone-200", "text-stone-700"],
    pessimistic: ["bg-orange-200/25", "text-orange-800"],
  };
  const { ivpsDisplay } = useSelector((state) => state.newIdea);

  if (!idea) return;

  const { cp } = idea;
  const { ivps, cagr } = idea[scenario];
  const diff = cp > ivps ? -(cp / ivps - 1) : 1 - cp / ivps;
  const displayed = ivpsDisplay === "Diff" ? diff : cagr;
  const sdo = (1 - (displayed < 0 ? Math.abs(displayed) : displayed)) * 300;

  return (
    <div
      className={`w-1/3 h-full shadow-statPrice px-4 py-2 ${styles[scenario][0]}`}
    >
      <div className="h-[10%] w-full flex items-center justify-between italic">
        <p
          className={`text-xs font-serif font-semibold tracking-wider ${styles[scenario][1]}`}
        >
          {scenario[0].toUpperCase() + scenario.slice(1)}
        </p>
        <p className="text-xl drop-shadow-gridderInd font-mono tracking-wider text-blue-950">
          {ivps.toFixed(2)}
        </p>
      </div>
      <div className="w-full h-[80%]">
        <ReusableSVG
          svgSize={150}
          strokeWidth={4}
          percent={displayed}
          strokeDashoffset={sdo}
        />
      </div>

      <p
        className={`w-full h-[10%] text-center font-semibold font-sans uppercase text-sm ${
          cp > ivps ? "text-orange-800" : "text-blue-800"
        } opacity-${ivpsDisplay === "Diff" ? "100" : "0"}`}
      >
        {cp > ivps ? "Premium" : "Discount"}
      </p>
    </div>
  );
}

export default ScenarioCard;
