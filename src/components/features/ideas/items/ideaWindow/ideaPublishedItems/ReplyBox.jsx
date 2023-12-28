/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import { updateIdea } from "./LikeComment";
import { fetchIdeas } from "../../../ideasSlice";
import CommentBoxHeader from "./CommentBoxHeader";
import CommentBoxMain from "./CommentBoxMain";
import ButtonLC from "../../../../../../ui/buttons/ButtonLC";

function ReplyBox({ r, idea, com }) {
  const dispatch = useDispatch();
  const { user, datetime, reply, likes, id } = r;
  const repliesFO = com.replies.filter((re) => re.id !== id);
  const commentsFO = idea.comments.filter((c) => c.id !== com.id);
  const email = JSON.parse(localStorage.getItem("user")).email;
  const isLiked = likes.includes(email)
    ? likes.filter((like) => like !== email)
    : [...likes, email];
  const updated = {
    ...com,
    replies: [...repliesFO, { ...r, likes: isLiked }],
  };

  function handleLikes(e) {
    e.preventDefault();
    updateIdea(idea.id, { ...idea, comments: [...commentsFO, updated] });
    dispatch(fetchIdeas());
  }

  return (
    <div className="w-full flex flex-col items-center gap-1 shadow-hoverFins px-2 py-4 font-sans rounded-lg">
      <CommentBoxHeader user={user} datetime={datetime} />
      <CommentBoxMain comment={reply} />
      <ButtonLC
        onClick={(e) => handleLikes(e)}
        type="Like"
        data={likes}
        liked={likes.includes(email)}
      />
    </div>
  );
}

export default ReplyBox;
