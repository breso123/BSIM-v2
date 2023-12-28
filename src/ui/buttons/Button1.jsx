import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button1({ type, onClick, children, to = "", additional = "" }) {
  const styles = {
    login: "lobbyBtn h-10 w-20 hover:font-semibold text-sm",
    signUp: "hover:italic text-blue-300",
    login2: "lobbyBtn mt-7 h-12 w-36 hover:scale-125",
    signUp2: "lobbyBtn mt-7 h-12 w-36 hover:scale-125",
    logout: "lobbyBtn h-8 w-24 text-sm hover:font-semibold",
    addToCart: "lobbyBtn my-4 h-8 w-28 hover:scale-105",
    getStarted:
      "lobbyBtn h-16 w-48 text-xl hover:text-indigo-300 hover:scale-105 hover:shadow-hoverBtns",
    btnBuy: "shadow-buyBtn h-10 w-[5rem] bg-blue-900 rounded-full text-sky-200",
    btnSell:
      "shadow-sellBtn h-10 w-[5rem] bg-orange-700 rounded-full text-red-100",
    contRead:
      "w-48 h-7 bg-blue-900 rounded-full mt-2 text-sm font-semibold text-sky-200",
    newIdea:
      "h-10 w-48 shadow-hoverFins rounded-lg text-sm font-semibold font-mono hover:shadow-hoverBtns hover:italic",
    ideaFilter:
      "rounded-lg border border-blue-950/50 bg-indigo-200/25 p-1 hover:border-blue-950 hover:bg-indigo-400/25",
    submitIdea:
      "h-8 w-24 shadow-hoverFins rounded-full text-blue-950 font-semibold text-sm hover:font-serif bg-lime-300 hover:shadow-watchList",
    modifyIdea: "h-8 w-24 font-mono text-blue-950 hover:italic",
    eva: "text-blue-900 font-sans hover:italic hover:underline hover:text-blue-950",
    evaItem:
      "w-8 h-8 p-1 mr-4 border-blue-950 rounded-full flex items-center justify-center hover:bg-sky-400/50 transition-all duration-200",
    commSubmit:
      "flex items-center justify-center gap-1 text-sm text-blue-950/75 font-semibold hover:italic",
    replySubmit:
      "text-3xl text-white h-[50%] flex items-center justify-center hover:text-blue-300",
    insidersApply:
      "h-8 w-24 shadow-hoverFins text-indigo-900 text-sm rounded-full mt-3 hover:font-semibold hover:bg-sky-500/10",
    insidersShowAll:
      "absolute top-[-40px] right-0 text-sm text-indigo-700 hover:italic hover:text-blue-950 hover:underline",
    technicals:
      "w-full h-full rounded-xl flex items-center justify-center hover:font-semibold hover:cursor-pointer hover:text-white hover:bg-indigo-800",
  };

  return (
    <button
      className={`${styles[type]} ${additional}`}
      onClick={onClick}
      to={to}
    >
      {to !== "" ? <Link to={to}>{children}</Link> : <>{children}</>}
    </button>
  );
}

export default Button1;
