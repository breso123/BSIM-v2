/* eslint-disable react/prop-types */
function Oscillator({ rotation, rating }) {
  return (
    <div className="h-full w-full">
      <svg
        className="absolute top-1/2 left-1/2 translate-y-[-40%] translate-x-[-50%]"
        width="250px"
        height="250px"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="circleCrop">
          <rect x="0" y="0" width="200" height="100"></rect>
        </clipPath>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="darkblue"></stop>
            <stop offset="100%" stopColor="orange"></stop>
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          d=""
          r="80"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="6"
          clipPath="url(#circleCrop)"
          style={{ filter: "drop-shadow(0px 2px 2px purple)" }}
        ></circle>
      </svg>

      <svg
        className={`absolute top-[20%] left-[28%] translate-y-[-50%] translate-x-[-50%] transition-all duration-500`}
        style={{ transform: `rotate(${rotation}deg)` }}
        width="200px"
        height="200px"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" d="" r="80" fill="none"></circle>
        <circle
          className="transition-all duration-500"
          cx="100"
          cy="100"
          d=""
          r="5"
          fill={`${rating?.col}`}
        ></circle>
        <path
          className="transition-all duration-500"
          cx="100"
          cy="100"
          d="M100 10 L100 40 L100 100 L100 40 Z"
          fill="none"
          stroke={`${rating?.col}`}
          strokeWidth="4"
        ></path>
      </svg>
    </div>
  );
}

export default Oscillator;
