// eslint-disable-next-line react/prop-types
function Box({ type, children, onClick }) {
  const styles = {
    idea: "h-[30rem] shadow-statPrice bg-orange-100/10 flex flex-col items-center px-4 py-2 hover:cursor-pointer",
    payout:
      "flex flex-col items-center justify-center h-72 w-[70%] mb-2 mt-1 p-2 bg-indigo-200/25 relative shadow-statPrice col-span-2",
    returns:
      "flex flex-col items-center justify-center w-[95%] mb-2 mt-1 p-2 bg-indigo-200/25 relative shadow-statPrice col-span-2",
    peg: "flex flex-col items-center justify-center h-48 w-[95%] mb-2 mt-1 p-2 bg-indigo-200/25 relative shadow-statPrice col-span-2",
    fins: "flex flex-col justify-between h-96 w-[95%] mb-2 mt-1 p-2 bg-gradient-to-r to-orange-100/25 from-indigo-200/25 relative shadow-statPrice",
    fcst: "flex flex-col items-center justify-center h-96 w-full mb-2 mt-1 p-2  relative col-span-2 bg-orange-100/25 shadow-statPrice",
    recom:
      "flex flex-col items-center justify-center h-[95%] w-full mb-2 mt-1 p-2 relative bg-orange-100/25 shadow-statPrice col-span-2",
    rating:
      "flex flex-col items-center justify-center h-36 w-[90%] mb-2 mt-1 p-2 relative bg-orange-100/25 shadow-statPrice",
    classic:
      "flex flex-col items-center justify-center h-72 w-[95%] mb-2 mt-1 p-2 bg-orange-100/25 relative shadow-statPrice",
    ceo: "flex flex-col px-2 py-4 shadow-statPrice bg-lime-300/25 col-span-4 w-[60%] h-[12rem]",
    cfocoo:
      "flex flex-col px-2 py-4 shadow-statPrice bg-sky-300/20 w-[95%] col-span-2 h-[11rem]",
    others:
      "flex flex-col px-2 py-4 shadow-statPrice bg-orange-100/25 w-[90%] h-[13rem]",
    optionPut:
      "relative w-[90%] h-[7rem] px-4 py-2 shadow-statPrice flex items-center justify-between transition-all duration-200 bg-orange-100/25 hover:bg-orange-100/50",
    optionCall:
      "relative w-[90%] h-[7rem] px-4 py-2 shadow-statPrice flex items-center justify-between transition-all duration-200 bg-indigo-200/25 hover:bg-indigo-200/50",
    scorePos:
      "w-full h-full flex flex-col justify-center p-3 shadow-statPrice hover:cursor-pointer transition-all duration-200 bg-blue-200/25 hover:bg-blue-200/50",
    scoreNeg:
      "w-full h-full flex flex-col justify-center p-3 shadow-statPrice hover:cursor-pointer transition-all duration-200 bg-red-200/25 hover:bg-red-200/50",
  };

  return (
    <div onClick={onClick} className={styles[type]}>
      {children}
    </div>
  );
}

export default Box;
