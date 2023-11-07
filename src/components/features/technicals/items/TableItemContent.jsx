/* eslint-disable react/prop-types */
function TableItemContent({ value, is, col, action }) {
  return (
    <div
      style={{ gridTemplateColumns: "2fr 1fr 1fr" }}
      className="h-10 w-full rounded-full grid grid-cols-3 hover:shadow-buttons group"
    >
      <p className="text-[0.8rem] flex items-center justify-start pl-10 group-hover:font-semibold group-hover:italic">
        {is}
      </p>
      <p
        className={`flex items-center justify-center text-[0.8rem] group-hover:font-semibold ${col}`}
      >
        {+value}
      </p>
      <p
        className={`flex items-center justify-center text-[0.8rem] group-hover:font-semibold ${col}`}
      >
        {action}
      </p>
    </div>
  );
}

export default TableItemContent;
