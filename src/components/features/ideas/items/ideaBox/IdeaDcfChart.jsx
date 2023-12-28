/* eslint-disable react/prop-types */
import DcfCircle from "./DcfCircle";
import DcfTableHeader from "./DcfTableHeader";
import DcfTableMain from "./DcfTableMain";

function IdeaDcfChart({ idea }) {
  const { cash, debt, fas, shares, cp } = idea;
  const { dcfSum } = idea["realistic"];
  const ivps = (dcfSum + fas + cash - debt) / shares;
  const diff = cp < ivps ? 1 - cp / ivps : -(cp / ivps - 1);

  return (
    <div className="w-full h-1/2 py-6 bg-blue-100/30 rounded-xl flex items-end justify-center">
      <div className="w-[70%] h-full px-4 flex flex-col items-center justify-between">
        <DcfTableHeader />
        <DcfTableMain values={idea["realistic"].values} />
      </div>
      <DcfCircle ivps={ivps} diff={diff} />
    </div>
  );
}

export default IdeaDcfChart;
