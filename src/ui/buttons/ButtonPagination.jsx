/* eslint-disable react/prop-types */
function ButtonPagination({
  type,
  disabled,
  onClick,
  additional = "",
  children,
}) {
  const styles = {
    ideaPag: "h-10 w-10 rounded-lg flex items-center justify-center",
  };
  return (
    <button
      className={`${styles[type]} ${additional}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonPagination;
