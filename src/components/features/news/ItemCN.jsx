/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function ItemCN({ n, onSetClickedArticle }) {
  const { url, providerSite, provider, date, title, content } = n;

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

  function formatNewsTime(date) {
    const inputDate = new Date(date);
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const day = String(inputDate.getDate()).padStart(2, "0");

    return `${year}/${month}/${day}`;
  }

  return (
    <div
      style={{ gridTemplateColumns: "1fr 4fr" }}
      className=" h-[11rem] grid grid-cols-2 items-start gap-4 relative p-4 hover:bg-orange-100/25 transition-all duration-200 group"
    >
      <div className="h-36 w-[14rem] flex items-center justify-center group-hover:shadow-watchList rounded-xl">
        <img className="h-full w-full rounded-xl" src={url} alt="News Image" />
      </div>
      <div className="h-full py-1 gap-2 flex flex-col items-start justify-evenly">
        <div className="flex gap-2 items-center text-xs text-blue-950">
          <span className="hover:text-orange-700 hover:underline">
            <Link to={providerSite}>{provider}</Link>
          </span>
          <span>&bull;</span>
          <span>{formatNewsTime(date)}</span>
        </div>
        <h2
          onClick={() => onSetClickedArticle(n)}
          className="text-xl font-semibold text-blue-800 mb-2 tracking-wide hover:text-blue-950 hover:cursor-pointer"
        >
          {setTextLength(title, 15)}
        </h2>
        <p className="tracking-wide text-xs text-stone-800 font-sans">
          {setTextLength(content, 35)}
        </p>
      </div>
    </div>
  );
}

export default ItemCN;
