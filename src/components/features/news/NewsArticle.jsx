import ReusableImage from "../../reusableImages/ReusableImage";

/* eslint-disable react/prop-types */
function NewsArticle({ clickedArticle, onSetClickedArticle }) {
  const styleChartContainer = {
    transform: `translate(-50%, ${clickedArticle !== null ? -50 : -250}%)`,
  };

  return (
    <>
      <div
        className="h-full w-full blur-[5px] bg-blue-950 absolute top-0 left-0 opacity-50 transition-all duration-300"
        style={{ display: !clickedArticle ? "none" : "block" }}
      ></div>

      <div
        style={styleChartContainer}
        className="h-[45rem] w-[50rem] flex flex-col justify-start items-center bg-white shadow-watchList rounded-lg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-300 z-50"
      >
        <div className="h-[10%] w-full bg-indigo-200/50 shadow-hoverFins flex items-center justify-between px-5">
          <div className="flex items-center justify-center gap-3">
            <ReusableImage
              src={clickedArticle?.providerLogo}
              additionalStyles="h-10 overflow-hidden "
            />

            <button
              onClick={() => onSetClickedArticle(null)}
              className="absolute top-2 right-2 bg-blue-950 text-white h-6 w-6 rounded-full"
            >
              X
            </button>
          </div>
          <p className="mr-8 text-xs font-serif">
            Symbols:{" "}
            <span className="font-semibold text-blue-900 italic ml-2">
              {clickedArticle?.symbols.join(", ")}
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-start mt-3 px-16 h-[39rem] overflow-scroll">
          <h3 className="text-blue-800 font-semibold text-3xl font-serif">
            {clickedArticle?.title}
            <p className="text-sm text-stone-900 mt-3 italic font-mono">
              {clickedArticle?.date}
            </p>
          </h3>
          <ReusableImage additionalStyles="h-72" src={clickedArticle?.url} />
          <p className="font-sans text-justify">{clickedArticle?.content}</p>
          {clickedArticle?.needsSubscription && (
            <button className="w-48 h-7 bg-blue-900 rounded-full mt-2 text-sm font-semibold text-sky-200">
              Continue Reading
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default NewsArticle;
