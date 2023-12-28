/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import IdeaChart from "./items/ideaBox/IdeaChart";
import IdeaDcfChart from "./items/ideaBox/IdeaDcfChart";
import { setClickedIdea } from "./ideasSlice";
import { useNavigate } from "react-router-dom";
import IdeaBoxHeader from "./items/ideaBox/IdeaBoxHeader";
import IdeaBoxFooter from "./items/ideaBox/IdeaBoxFooter";
import IdeaBoxTC from "./items/ideaBox/IdeaBoxTC";
import IdeaBoxTV from "./items/ideaBox/IdeaBoxTV";
import Box from "../../../ui/box/Box";

function IdeaBox({ idea }) {
  const {
    user,
    datetime,
    ticker,
    valuation,
    title,
    content,
    id,
    likes,
    comments,
  } = idea;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    dispatch(setClickedIdea(idea));
    navigate(`article/${id}`);
  }

  return (
    <Box type="idea" onClick={(e) => handleClick(e)}>
      <IdeaBoxHeader user={user} datetime={datetime} />
      {valuation === "DCF" && <IdeaDcfChart idea={idea} />}
      {valuation !== "DCF" && <IdeaChart idea={idea} />}
      <IdeaBoxTV ticker={ticker} valuation={valuation} />
      <IdeaBoxTC title={title} content={content} />
      <IdeaBoxFooter likes={likes} comments={comments} />
    </Box>
  );
}

export default IdeaBox;
