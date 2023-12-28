/* eslint-disable react/prop-types */
function GridderLeft({ type, children, additional = "" }) {
  const styles = {
    fins: "tracking-wide flex items-center justify-between gap-3 relative text-md",
    ideaTab: "w-full h-full flex items-center justify-start",
  };

  return (
    <div className="pl-1.5">
      <p className={`${styles[type]} ${additional}`}>{children}</p>
    </div>
  );
}

export default GridderLeft;
