/* eslint-disable react/prop-types */
function PaginSVG({ dir }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 transition-all duration-200`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={`${
          dir === "right"
            ? "M8.25 4.5l7.5 7.5-7.5 7.5"
            : "M15.75 19.5L8.25 12l7.5-7.5"
        }`}
      />
    </svg>
  );
}

export default PaginSVG;
