/* eslint-disable react/prop-types */
import TableRow from "../../../formItems/TableRow";

function MainEA({ title, isOpen, idea, o, r, p, act }) {
  function getItm() {
    if (title === "Stock Price") return "price";
    if (title === "Revenue") return "value";
    if (title === "Free Cash Flow") return "item";
  }

  const style = `${
    title === "Stock Price"
      ? `bg-indigo-500/25 py-4 h-[12rem] border-y-2 border-blue-300`
      : `bg-blue-300/25 h-[10rem] py-3 border-y border-indigo-800`
  }`;

  return (
    <div
      className={`w-full flex flex-col gap-1 px-1 mb-4 shadow-watchList rounded-lg ${
        !isOpen && "hidden"
      } ${style} `}
    >
      <div className="w-full flex flex-col gap-1 mb-3 ">
        <TableRow vals={o} idea={idea} item={`${getItm()}O`} ae={true} />
        <TableRow vals={r} idea={idea} item={`${getItm()}R`} ae={true} />
        <TableRow vals={p} idea={idea} item={`${getItm()}P`} ae={true} />
      </div>
      <TableRow vals={act} idea={idea} item="valueAct" ae={true} />
      {title === "Stock Price" && (
        <TableRow vals={act} idea={idea} item="diffR" ae={true} />
      )}
    </div>
  );
}

export default MainEA;
