/* eslint-disable react/prop-types */
import useActualValues from "../useActualValues";
import AnalystEst from "./AnalystEst";
import InfoCirc from "./InfoCirc";
import InfoTableRow from "./InfoTableRow";

function InfoMain({ val, type, anly }) {
  const { revenue, cagr } = useActualValues(type, val);
  const chMD = !["multi", "dbtEb"].some((t) => t === type);

  return (
    <div
      className={` w-[40rem] absolute flex flex-col items-center justify-center bg-stone-200 text-blue-800 shadow-statPrice2 rounded-xl top-[10px] left-8 z-50 py-1 px-2 font-sans`}
    >
      <div className="w-full flex items-center justify-center">
        <InfoTableRow val={val} type={type} />
        {chMD && <InfoCirc cagr={cagr} revenue={revenue} type={type} />}
      </div>
      {anly && <AnalystEst />}
    </div>
  );
}

export default InfoMain;
