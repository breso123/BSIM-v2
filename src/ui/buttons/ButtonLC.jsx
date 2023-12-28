/* eslint-disable react/prop-types */
import LikeCommentSVG from "../LikeCommentSVG";

function ButtonLC({ type, data, onClick, liked = false }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-1 w-[7rem] group"
    >
      <span>
        <LikeCommentSVG liked={liked} type={type} />
      </span>
      <span className="group-hover:italic">
        {type} ({data.length})
      </span>
    </button>
  );
}

export default ButtonLC;
