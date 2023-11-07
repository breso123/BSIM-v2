import GridderDCF from "./GridderDCF";

const ideaTypes = [
  ["Period", "header"],
  ["Free Cash Flow", "basic"],
  ["W.A.C.C. (%)", "wacc"],
  ["Discounted FCF", "dcf"],
  ["TOTAL", "total"],
];

/* eslint-disable react/prop-types */
function IdeaDCF({ values }) {
  return (
    <div className="w-[90%] h-48 p-4 bg-white col-span-2 mb-8">
      {ideaTypes.map((gr, i) => (
        <GridderDCF key={i} data={values} item={gr[0]} type={gr[1]} />
      ))}
    </div>
  );
}

export default IdeaDCF;
