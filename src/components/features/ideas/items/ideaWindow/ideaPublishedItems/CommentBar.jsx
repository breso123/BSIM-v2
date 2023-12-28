/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import CommentBox from "../CommentBox";
import CommentForm from "./CommentForm";

function CommentBar({ id }) {
  const { showCommentBar, ideas } = useSelector((state) => state.ideas);
  const idea = ideas.find((idea) => idea.id === id);
  const left = `${
    showCommentBar ? "left-[-14.7rem] opacity-1" : "left-[10rem] opacity-0"
  }`;

  return (
    <div
      className={`absolute h-[80%] w-[27.5%] rounded-l-lg p-2 bg-indigo-100 top-1/2 translate-y-[-45%] ${left} transition-all duration-200`}
    >
      <div className="h-[85%] w-full overflow-scroll flex flex-col gap-2 mb-2">
        {idea.comments.map((com, i) => (
          <CommentBox key={i} com={com} idea={idea} id={id} />
        ))}
      </div>
      <CommentForm id={id} idea={idea} />
    </div>
  );
}

export default CommentBar;
