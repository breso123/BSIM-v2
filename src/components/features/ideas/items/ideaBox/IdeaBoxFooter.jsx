/* eslint-disable react/prop-types */
function IdeaBoxFooter({ likes, comments }) {
  return (
    <div className="flex items-center w-full justify-center gap-4 font-semibold text-blue-950/80">
      <p>
        {likes.length} {likes.length === 1 ? "like" : "likes"}
      </p>
      <span>&</span>
      <p>
        {comments.length} {comments.length === 1 ? "comment" : "comments"}
      </p>
    </div>
  );
}

export default IdeaBoxFooter;
