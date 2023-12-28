/* eslint-disable react/prop-types */
function GridderRight({ type, cols, children, additional = "" }) {
  const styles = {
    fins: "text-center",
    ideaTab: "w-full h-full items-center",
  };
  return (
    <div className={`grid grid-cols-${cols} ${styles[type]} ${additional}`}>
      {children}
    </div>
  );
}

export default GridderRight;
