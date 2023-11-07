/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import HeaderTitle from "../../HeaderTitle";
import HeaderItems from "../../HeaderItems";

function HeaderGeneral({ general }) {
  //const { logo, name, symbol } = general;
  const generalImg = useSelector((state) => state.general.generalImg);
  const generalKey = useSelector((state) => state.general.generalKey);

  return (
    <div
      style={{ gridTemplateColumns: "1fr 2fr" }}
      className="grid grid-cols-2 bg-sky-200/30 h-24 rounded-b-xl shadow-appHeader mb-5"
    >
      <HeaderTitle financialsImg={generalImg} financialsKey={generalKey} />

      <HeaderItems cols="1">
        <div className="flex items-center justify-end w-full pr-4 divide-x divide-blue-950/50">
          <p className="flex flex-col items-center justify-center gap-1 px-3">
            <span className="font-semibold text-[1rem]">{general?.name}</span>
            <span className="italic text-sm text-green-800">
              Ticker: {general?.symbol}
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

export default HeaderGeneral;
