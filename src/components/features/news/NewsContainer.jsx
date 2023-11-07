//import { useParams } from "react-router-dom";
import HeaderStatistics from "../statistics/HeaderStatistics";
import { loadDefault } from "../../../pages/services/apiFinancials";
import { useLoaderData, useParams } from "react-router-dom";
import ItemCN from "./ItemCN";
import NewsArticle from "./NewsArticle";
import { useState } from "react";
import { useNewsFilter } from "./useNewsFilter";

function NewsContainer() {
  const [newsQuery, setNewsQuery] = useState("");
  const [clickedArticle, setClickedArticle] = useState(null);
  const { newsKey } = useParams();
  const news = useLoaderData();
  const newsFiltered = useNewsFilter(news);
  const newsFinal = newsKey === "all_news" ? news : newsFiltered[newsKey];
  const qNews =
    newsQuery === ""
      ? newsFinal
      : newsFinal.filter((ns) =>
          [ns.title, ns.content].some((c) =>
            c.toLowerCase().includes(newsQuery.toLowerCase())
          )
        );

  return (
    <div className="h-full w-[65.9rem] border-t-2 border-l-2 border-solid border-blue-950 px-4 relative">
      <HeaderStatistics />
      <div className="h-[38rem] overflow-scroll flex flex-col items-start justify-start pt-2 px-6">
        {newsQuery !== "" && qNews.length === 0 ? (
          <p className="w-full text-center text-2xl text-red-900 mt-24 flex items-center justify-center font-mono">
            <span className="font-bold text-5xl mr-4">!</span>
            <span>Ooops. We could not find any news containing</span>
            <span className="italic font-semibold ml-3">
              &#34;{newsQuery}&#34;
            </span>
          </p>
        ) : (
          qNews.map((n, i) => (
            <ItemCN key={i} n={n} onSetClickedArticle={setClickedArticle} />
          ))
        )}

        <NewsArticle
          clickedArticle={clickedArticle}
          onSetClickedArticle={setClickedArticle}
        />
      </div>
      <div className="w-96 h-10 absolute top-7 left-[35%]">
        <input
          value={newsQuery}
          onChange={(e) => setNewsQuery(e.target.value)}
          className="h-full w-full rounded-full shadow-watchList bg-indigo-800/75 px-4 text-sm text-white"
          type="text"
          placeholder="Search for what you are interested in"
        />
      </div>
    </div>
  );
}

export async function loader() {
  const data = await loadDefault("companyNews");
  return data;
}

export default NewsContainer;
