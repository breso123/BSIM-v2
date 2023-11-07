/* eslint-disable react/prop-types */
import {
  setMultipleRating,
  setPegPosition,
} from "../../../../helpers/miscFuncs";
import ReusableImage from "../../../reusableImages/ReusableImage";

function ItemPEG({ src, peg }) {
  const left = setPegPosition(peg);
  const rating = setMultipleRating(peg, [0, 1, 2, 3, 4, 5]);
  const style = { left: `${left}%`, backgroundColor: rating?.col };

  return (
    <div
      style={style}
      className={`absolute top-1 h-2 w-2 rounded-full bg-blue-900`}
    >
      <div className="relative">
        <div
          style={{
            backgroundColor: `${rating?.col}30`,
            boxShadow: `0 0 5px ${rating?.col}30`,
          }}
          className="absolute h-12 w-28 divide-x divide-blue-950 py-1.5  rounded-xl bottom-4 translate-x-[-47%] flex items-center"
        >
          <div className="h-full w-1/2 flex items-center justify-center">
            <ReusableImage src={src} additionalStyles="h-8 w-8 bg-white" />
          </div>
          <div className="w-1/2 h-full flex items-center justify-center text-lg text-blue-950/75 italic">
            <p>{peg?.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPEG;
