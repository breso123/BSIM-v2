/* eslint-disable react/prop-types */
function GridderVals({ gtc, type, children, additional = "" }) {
  const styles = {
    fins: "text-[13.5px] px-1 rounded-2xl grid grid-cols-2 w-[99%] h-7 items-center hover:shadow-hoverFins hover:font-bold hover:italic",
    ideaTab: "w-full grid grid-cols-2 pl-3 rounded-lg",
  };

  return (
    <div
      style={{ gridTemplateColumns: gtc }}
      className={`${styles[type]} ${additional}`}
    >
      {children}
    </div>
  );
}

export default GridderVals;
