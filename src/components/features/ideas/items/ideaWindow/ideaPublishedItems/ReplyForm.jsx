/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { fetchIdeas, typeReply } from "../../../ideasSlice";
import { updateIdea } from "./LikeComment";
import Button1 from "../../../../../../ui/buttons/Button1";

function ReplyForm({ idea, com }) {
  const { reply } = useSelector((state) => state.ideas);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const comsFO = idea.comments.filter((c) => c.id !== com.id);

  function handleTypeReply(e) {
    e.preventDefault();
    dispatch(typeReply(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newReply = {
      user: user.email,
      reply,
      id: `${com.id}${new Date().getTime()}`,
      datetime: new Date().toISOString(),
      likes: [],
    };
    updateIdea(idea.id, {
      ...idea,
      comments: [...comsFO, { ...com, replies: [...com.replies, newReply] }],
    });
    dispatch(typeReply(""));
    dispatch(fetchIdeas());
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="h-16 w-full flex items-center justify-evenly bg-blue-950 "
    >
      <textarea
        onChange={(e) => handleTypeReply(e)}
        value={reply}
        className="w-[80%] h-[75%] text-[0.7rem] p-0.5 text-blue-950"
        placeholder="Enter your reply"
      />
      <Button1 type="replySubmit">&rarr;</Button1>
    </form>
  );
}

export default ReplyForm;
