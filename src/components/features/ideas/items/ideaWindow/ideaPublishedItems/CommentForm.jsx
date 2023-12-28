/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { fetchIdeas, typeComment } from "../../../ideasSlice";
import { updateIdea } from "./LikeComment";
import Button1 from "../../../../../../ui/buttons/Button1";

function CommentForm({ id, idea }) {
  const { comment } = useSelector((state) => state.ideas);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  function handleTypeComment(e) {
    e.preventDefault();
    dispatch(typeComment(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newComment = {
      user: user.email,
      comment,
      datetime: new Date().toISOString(),
      id: `${user.id}${new Date().getTime()}`,
      likes: [],
      replies: [],
    };
    updateIdea(id, { ...idea, comments: [...idea.comments, newComment] });
    dispatch(typeComment(""));
    dispatch(fetchIdeas());
  }
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="h-[15%] flex flex-col items-center justify-evenly"
    >
      <textarea
        value={comment}
        onChange={(e) => handleTypeComment(e)}
        className="w-full shadow-statPrice text-xs p-2 text-blue-950"
        placeholder="Write your comment"
      />
      <Button1 type="commSubmit"> Submit &rarr;</Button1>
    </form>
  );
}

export default CommentForm;
