/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import { fetchIdeas } from "../../../ideasSlice";
import { updateIdea } from "./LikeComment";
import ButtonLC from "../../../../../../ui/buttons/ButtonLC";

function CommentBoxLC({ id, idea, com, sra }) {
  const dispatch = useDispatch();
  const email = JSON.parse(localStorage.getItem("user")).email;
  const { likes, replies } = com;
  const checkIsLiked = likes.includes(email);
  const commentsFO = idea.comments.filter((c) => c.id !== com.id);
  const newLikes = checkIsLiked
    ? likes.filter((l) => l !== email)
    : [...likes, email];
  const newComments = [...commentsFO, { ...com, likes: newLikes }];

  function handleLikes(e) {
    e.preventDefault();
    updateIdea(id, { ...idea, comments: newComments });
    dispatch(fetchIdeas());
  }

  function handleReplies(e) {
    e.preventDefault();
    sra((rpa) => !rpa);
  }
  return (
    <div className="h-[10%] w-full flex items-center justify-center text-xs text-blue-950">
      <ButtonLC
        onClick={(e) => handleLikes(e)}
        type="Like"
        data={likes}
        liked={checkIsLiked}
      />
      <ButtonLC onClick={(e) => handleReplies(e)} type="Reply" data={replies} />
    </div>
  );
}

export default CommentBoxLC;
