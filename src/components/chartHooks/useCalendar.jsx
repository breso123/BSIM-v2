import { useState, useEffect } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const useCalendar = (year, month, highlightDate) => {
  const [calendarData, setCalendarData] = useState({
    year,
    month,
    highlightDate,
    daysInMonth: new Date(year, month + 1, 0).getDate(),
    firstDayOfWeek: new Date(year, month, 1).getDay(),
  });

  useEffect(() => {
    setCalendarData((prevData) => ({
      ...prevData,
      daysInMonth: new Date(year, month + 1, 0).getDate(),
      firstDayOfWeek: new Date(year, month, 1).getDay(),
    }));
  }, [year, month]);

  const createHeader = () => {
    const monthName = months[month];
    return (
      <>
        <div className="month">{monthName}</div>
        <div className="calendar-year">{year}</div>
      </>
    );
  };

  const createCalendar = () => {
    const emptyBoxes = [];
    for (let i = 0; i < calendarData.firstDayOfWeek; i++) {
      emptyBoxes.push(
        <div key={`empty-${i}`} className="h-full w-full text-center" />
      );
    }

    const calendarDays = [];
    for (let day = 1; day <= calendarData.daysInMonth; day++) {
      const classNames = [
        "text-center w-full text-sm transition-all duration-200",
      ];

      if (day === highlightDate) {
        classNames.push("bg-blue-950 text-sky-100 rounded-full");
      }

      calendarDays.push(
        <div key={`day-${day}`} className={classNames.join(" ")}>
          {day}
        </div>
      );
    }

    return (
      <>
        {emptyBoxes}
        {calendarDays}
      </>
    );
  };

  return { createHeader, createCalendar };
};

export default useCalendar;
