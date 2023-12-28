/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { commentBarDisplay, fetchIdeas } from "../../../ideasSlice";
import ButtonLC from "../../../../../../ui/buttons/ButtonLC";

function LikeComment({ id }) {
  const { ideas } = useSelector((state) => state.ideas);
  const idea = ideas.find((idea) => idea.id === id);
  const user = JSON.parse(localStorage.getItem("user")).email;
  const { likes, comments } = idea;
  const dispatch = useDispatch();
  const checkIsLiked = likes.includes(user);

  function handleClickLikes(e) {
    e.preventDefault();
    updateIdea(id, {
      ...idea,
      likes: checkIsLiked ? likes.filter((l) => l !== user) : [...likes, user],
    });
    dispatch(fetchIdeas());
  }

  function handleClickComments(e) {
    e.preventDefault();
    dispatch(commentBarDisplay());
  }

  return (
    <div className="flex items-center justify-center gap-6 text-xs font-serif bg-white px-4 py-1 rounded-full shadow-statPrice text-blue-950">
      <ButtonLC
        type="Like"
        data={likes}
        onClick={(e) => handleClickLikes(e)}
        liked={checkIsLiked}
      />
      <ButtonLC
        type="Comment"
        data={comments}
        onClick={(e) => handleClickComments(e)}
      />
    </div>
  );
}

export async function updateIdea(id, updatedIdea) {
  try {
    const res = await fetch(`http://localhost:8000/ideas/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedIdea),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw Error("Failed updating idea. Try Again");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    alert(err.message);
  }
}

export default LikeComment;
