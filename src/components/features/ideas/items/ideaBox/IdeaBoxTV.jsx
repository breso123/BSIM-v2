/* eslint-disable react/prop-types */
function IdeaBoxTV({ ticker, valuation }) {
  return (
    <div className="w-full h-[10%] mb-5 italic flex items-center justify-between text-sm px-3">
      <p>Symbol: {ticker}</p>
      <p>Valuation: {valuation}</p>
    </div>
  );
}

export default IdeaBoxTV;
