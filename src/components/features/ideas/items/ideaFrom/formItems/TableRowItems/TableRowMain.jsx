/* eslint-disable react/prop-types */

function Trm({ tg, period, i, item }) {
  const itm = tg[2](period, i);
  const chMGD = ["margin", "growth", "diff"].some((it) => it === item);
  const col = chMGD && (itm < 0 ? "text-red-700" : "text-blue-700");

  return (
    <p
      key={i}
      className={`w-full h-full flex items-center justify-center text-center ${col}`}
    >
      {itm}
    </p>
  );
}

export default Trm;
