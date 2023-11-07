import { useSelector } from "react-redux";
import HeaderTitle from "../HeaderTitle";
import HeaderItems from "../HeaderItems";

function HeaderAnalysis() {
  const { symbol, name } = useSelector((state) => state.general.general);
  const analysisKey = useSelector((state) => state.analysis.analysisKey);
  const analysisImg = useSelector((state) => state.analysis.analysisImg);
  return (
    <div
      style={{ gridTemplateColumns: "1fr 2fr" }}
      className="grid grid-cols-2 bg-sky-200/30 h-24 rounded-b-xl shadow-appHeader mb-5"
    >
      <HeaderTitle financialsImg={analysisImg} financialsKey={analysisKey} />

      <HeaderItems cols="1">
        <div className="flex items-center justify-end w-full pr-4 divide-x divide-blue-950/50">
          <p className="flex flex-col items-center justify-center gap-1 px-3">
            <span className="font-semibold text-[1rem]">{name}</span>
            <span className="italic text-sm text-green-800">
              Ticker: {symbol}
            </span>
          </p>
          <div className="h-full flex flex-col items-center justify-center gap-1 px-3">
            <p className="text-3xl text-indigo-950 drop-shadow-gridderInd">
              175.42
            </p>
            <p className="text-sm text-blue-700">+12.8%</p>
          </div>
        </div>
      </HeaderItems>
    </div>
  );
}

export default HeaderAnalysis;
