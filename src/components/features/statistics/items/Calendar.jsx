/* eslint-disable react/prop-types */
import useCalendar from "../../../chartHooks/useCalendar";

function Calendar({ date, lsd }) {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();
  const { createHeader, createCalendar } = useCalendar(year, month, day);

  return (
    <div className="h-full w-[60%] flex flex-col items-center justify-center relative">
      <div className="w-full h-10 px-4 font-semibold tracking-wide flex items-center justify-between bg-blue-950 text-sky-100">
        {createHeader()}
      </div>
      <div className="w-full h-[8rem]  p-1 grid grid-cols-7 justify-items-center border border-blue-950">
        {createCalendar()}
      </div>
      <p className="mt-2 text-xs text-blue-950 absolute top-[85%]">
        Last Split Factor:
        <span className="italic font-semibold ml-2 font-sans text-sm">
          {lsd}
        </span>
      </p>
    </div>
  );
}

export default Calendar;
