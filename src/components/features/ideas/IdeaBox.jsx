/* eslint-disable react/prop-types */
//import IdeaChart from "./items/IdeaChart";

import { useDispatch } from "react-redux";
import IdeaChart from "./items/IdeaChart";
import IdeaDcfChart from "./items/IdeaDcfChart";
import { setClickedIdea } from "./ideasSlice";
import { useNavigate } from "react-router-dom";

function IdeaBox({ idea }) {
  const { user, datetime, ticker, valuation, title, content } = idea;
  const ideaDate = new Date(datetime);
  const { cagr, values } = idea.realistic;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function setTextLength(text, maxLength) {
    return text
      .split(" ")
      .map((t, i, arr) => {
        if (arr.length >= maxLength)
          return i <= maxLength ? t + (i === maxLength ? "..." : "") : "";
        else return t;
      })
      .join(" ");
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(setClickedIdea(idea));
    navigate("article");
  }

  return (
    <div
      onClick={(e) => handleClick(e)}
      className="h-[30rem] shadow-statPrice bg-orange-100/10 flex flex-col px-4 hover:cursor-pointer"
    >
      <div className="w-full h-[10%] flex items-center justify-between text-sm font-semibold">
        <p>{user}</p>
        <p>
          {ideaDate.getFullYear()}/{ideaDate.getMonth() + 1}/
          {ideaDate.getDate()}
        </p>
      </div>
      {valuation === "DCF" && <IdeaDcfChart idea={idea} />}
      {valuation !== "DCF" && (
        <IdeaChart values={values} cagr={cagr} str={idea.fcstString} />
      )}
      <div className="w-full h-[10%] mb-5 italic flex items-center justify-between text-sm px-3">
        <p>Symbol: {ticker}</p>
        <p>Valuation: {valuation}</p>
      </div>
      <div className="w-full h-[10%] font-semibold font-sans">
        <p>{setTextLength(title, 8)}</p>
      </div>
      <div className="w-full h-[20%] text-sm">
        <p className="text-justify">{setTextLength(content, 25)}</p>
      </div>
    </div>
  );
}

export default IdeaBox;
