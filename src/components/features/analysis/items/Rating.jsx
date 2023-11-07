/* eslint-disable react/prop-types */
function Rating({ rating }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 absolute top-[32.5%] left-[62.5%] ">
      <p className="text-indigo-900 text-lg font-semibold italic">Rating</p>
      <p className="drop-shadow-gridderInd text-7xl text-blue-950 font-semibold font-serif">
        {rating}
      </p>
    </div>
  );
}

export default Rating;
