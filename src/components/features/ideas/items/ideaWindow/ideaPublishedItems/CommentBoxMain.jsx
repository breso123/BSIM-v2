/* eslint-disable react/prop-types */
function CommentBoxMain({ comment }) {
  return (
    <div className="h-[80%] w-full flex items-center justify-start text-xs">
      <p className="text-justify">{comment}</p>
    </div>
  );
}

export default CommentBoxMain;
