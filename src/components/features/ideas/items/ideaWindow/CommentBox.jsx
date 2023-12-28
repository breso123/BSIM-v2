/* eslint-disable react/prop-types */
import { useState } from "react";
import CommentReply from "./ideaPublishedItems/CommentReply";
import CommentBoxHeader from "./ideaPublishedItems/CommentBoxHeader";
import CommentBoxMain from "./ideaPublishedItems/CommentBoxMain";
import CommentBoxLC from "./ideaPublishedItems/CommentBoxLC";

function CommentBox({ com, idea, id }) {
  const [repActive, setRepActive] = useState(false);
  const { user, comment, datetime, replies } = com;

  return (
    <>
      <div className="w-full shadow-hoverFins px-2 py-4 font-sans relative">
        <CommentBoxHeader user={user} datetime={datetime} />
        <CommentBoxMain comment={comment} />
        <CommentBoxLC sra={setRepActive} com={com} id={id} idea={idea} />
      </div>
      {repActive && <CommentReply replies={replies} idea={idea} com={com} />}
    </>
  );
}

export default CommentBox;
