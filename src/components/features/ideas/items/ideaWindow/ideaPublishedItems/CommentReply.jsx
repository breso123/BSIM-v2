import ReplyBox from "./ReplyBox";
import ReplyForm from "./ReplyForm";

/* eslint-disable react/prop-types */
function CommentReply({ replies, idea, com }) {
  return (
    <div className="w-full  rounded-lg bg-blue-200 flex flex-col items-center justify-between p-1">
      <div className="w-full overflow-scroll flex flex-col gap-2 text-xs mb-2">
        {replies.map((r, i) => (
          <ReplyBox key={i} r={r} idea={idea} com={com} />
        ))}
      </div>
      <ReplyForm idea={idea} com={com} />
    </div>
  );
}

export default CommentReply;
