/* eslint-disable react/prop-types */
import { formatDate } from "../../../../../helpers/formatters";
import ClockSVG from "../../../../../ui/ClockSVG";

function IdeaBoxHeader({ user, datetime }) {
  const ideaDate = new Date(datetime);
  return (
    <div className="w-full h-[10%] flex items-center justify-between text-sm font-semibold">
      <p>{user}</p>
      <p className="flex items-center gap-2 text-indigo-950">
        <span>{formatDate(ideaDate)}</span>
        <span>
          <ClockSVG />
        </span>
      </p>
    </div>
  );
}

export default IdeaBoxHeader;
