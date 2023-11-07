/* eslint-disable react/prop-types */
function IdeaBar({ period, height }) {
  return (
    <div style={height} className="w-5 rounded-t-lg relative">
      <p className="absolute bottom-[-20px] left-1/2 translate-x-[-50%] text-[0.7rem]">
        {period}
      </p>
    </div>
  );
}

export default IdeaBar;
