/* eslint-disable react/prop-types */
function IdeaBoxTC({ title, content }) {
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

  return (
    <>
      <div className="w-full h-[10%] font-semibold font-sans">
        <p>{setTextLength(title, 8)}</p>
      </div>
      <div className="w-full h-[20%] text-sm">
        <p className="text-justify">{setTextLength(content, 20)}</p>
      </div>
    </>
  );
}

export default IdeaBoxTC;
