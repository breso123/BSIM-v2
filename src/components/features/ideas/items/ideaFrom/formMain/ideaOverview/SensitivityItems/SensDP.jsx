/* eslint-disable react/prop-types */
function SensDP({ allVals, idea }) {
  const premium = allVals.flat().filter((val) => val < idea.cp).length;
  const discount = allVals.flat().filter((val) => val > idea.cp).length;

  return (
    <div className="w-[10.5%] pl-8 pb-6 flex flex-col items-start justify-center gap-5 divide-y divide-fuchsia-800/50 mr-[-20px] font-mono text-sm font-semibold italic tracking-wide">
      <p className="w-full text-blue-800/80 flex flex-col items-center">
        <span className="text-3xl">{discount}</span>
        <span>Discounts</span>
      </p>
      <p className="w-full text-red-800/80 flex flex-col items-center pt-4">
        <span className="text-3xl">{premium}</span>
        <span>Premiums</span>
      </p>
    </div>
  );
}

export default SensDP;
