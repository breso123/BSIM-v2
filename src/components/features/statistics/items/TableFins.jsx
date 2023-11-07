import TableFinsItem from "./TableFinsItem";

/* eslint-disable react/prop-types */
function TableFins({ fs, itemIndex }) {
  return (
    <div className="h-full w-1/2 flex flex-col gap-3 mt-1 items-start justify-center">
      {fs?.map((stat, i) => {
        const color = stat.value < 0 ? stat.col[1] : stat.col[0];
        const colorG = stat.growth > 0 ? "blue-900" : "orange-700";
        const colorM = stat.margin > 0 ? "blue-900" : "orange-700";
        const shadow = itemIndex === i ? `inset 0 0 5px midnightblue` : "";

        return (
          <TableFinsItem
            key={i}
            color={color}
            colorG={colorG}
            colorM={colorM}
            itemIndex={itemIndex}
            index={i}
            shadow={shadow}
            stat={stat}
          />
        );
      })}
      <div className="h-8 w-[14.5rem] shadow-hoverFins rounded-lg absolute top-[28%] left-[23.5%] flex items-center justify-between px-5 text-xs text-blue-950">
        <p className="text-indigo-950 font-bold text-sm">Value</p>
        <p>Growth</p>
        <p>Margin</p>
      </div>
    </div>
  );
}

export default TableFins;
