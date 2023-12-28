/* eslint-disable react/prop-types */
function AccordianSVG({ isOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={`${isOpen ? "M19.5 12h-15" : "M12 4.5v15m7.5-7.5h-15"}`}
      />
    </svg>
  );
}

export default AccordianSVG;
