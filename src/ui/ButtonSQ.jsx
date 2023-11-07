/* eslint-disable react/prop-types */
function ButtonSQ({
  children,
  type,
  onClick,
  additional = "",
  disabled = false,
}) {
  const styles = {
    close: "h-6 w-6 bg-blue-950 text-white absolute top-2 right-2 rounded-full",
    pagination: "h-10 w-10 rounded-lg flex items-center justify-center",
    nifewfoi: "",
  };
  return (
    <button
      disabled={disabled}
      className={`${styles[type]} ${additional}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonSQ;
