import { useEffect, useState } from "react";
import * as kw from "../../../keywords/kwsNews";

export function useNewsFilter(news) {
  const [newsFS, setNewsFS] = useState([]);
  const [newsIns, setNewsIns] = useState([]);
  const [newsInv, setNewsInv] = useState([]);
  const [newsEsg, setNewsEsg] = useState([]);

  useEffect(() => {
    const fs = [];
    const ins = [];
    const inv = [];
    const esg = [];

    news.forEach((ns) => {
      const title = ns.title.split(" ");
      const content = ns.content.split(" ");
      const allWords = [...title, ...content];
      if (
        allWords.filter((w) =>
          kw["kws_financial_statements"].includes(w.toLowerCase())
        ).length > 2
      )
        fs.push(ns);

      if (
        allWords.filter((w) => kw["kws_insiders"].includes(w.toLowerCase()))
          .length > 2
      )
        ins.push(ns);
      if (
        allWords.filter((w) => kw["kws_investing"].includes(w.toLowerCase()))
          .length > 2
      )
        inv.push(ns);
      else esg.push(ns);
    });

    setNewsFS(fs);
    setNewsIns(ins);
    setNewsInv(inv);
    setNewsEsg(esg);
  }, [news]);

  return {
    financial_statements: newsFS,
    insiders: newsIns,
    investing: newsInv,
    esg_and_other: newsEsg,
  };
}
