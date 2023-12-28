/* eslint-disable react/prop-types */
import { formatDate } from "../../../../../../helpers/formatters";

function CommentBoxHeader({ user, datetime }) {
  return (
    <div className="h-[10%] w-full flex items-center justify-between text-sm">
      <p className="font-semibold text-xs">{user}</p>
      <p className="italic text-xs">{formatDate(datetime)}</p>
    </div>
  );
}

export default CommentBoxHeader;
