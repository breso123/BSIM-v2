/* eslint-disable react/prop-types */
function Select1({ type, value, onChange, children }) {
  const styles = {
    revenueFcst: " text-xs h-4 w-[7rem] px-3 selectX",
    ideaLineChart: "selectX px-3",
    multiDev: "w-14 border-x-2 border-blue-950/75 italic rounded-full",
    finItemType: "w-48 h-[2rem] selectY centered focus:outline-none",
    cagr: "bg-sky-100/0 text-md italic w-[50px] text-fuchsia-950",
    perSelect: "w-[5rem] selectY text-center tracking-wider",
    statBox: "w-[12rem] h-[1.5rem] selectY",
    transactFilt:
      "bg-white/5 w-2/3 border border-blue-950 text-blue-950 font-sans rounded-xl px-3 italic text-sm",
    transactFiltSum:
      "absolute top-[-35px] bg-white/5 left-1/2 translate-x-[-50%] border border-blue-950 text-blue-950 font-sans rounded-xl px-1 italic",
  };

  return (
    <select className={`${styles[type]}`} value={value} onChange={onChange}>
      {children}
    </select>
  );
}

export default Select1;
