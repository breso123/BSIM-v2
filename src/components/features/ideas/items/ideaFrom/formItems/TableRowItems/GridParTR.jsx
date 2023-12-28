/* eslint-disable react/prop-types */
function GridParTR({ item, period, i, tgtItem }) {
  const itm = tgtItem[2](period, i);
  const chMGD = ["margin", "growth", "diff"].some((itm) => itm === item);
  return (
    <p
      className={`w-full h-full flex items-center justify-center text-center ${
        chMGD && (itm < 0 ? "text-red-700" : "text-blue-700")
      }`}
    >
      {itm}
    </p>
  );
}

export default GridParTR;
