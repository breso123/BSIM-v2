/* eslint-disable react/prop-types */
function CfSelector({ onChange, cfItem }) {
  return (
    <div className="absolute top-[-1.5rem] flex items-center justify-center gap-3">
      <p className="text-sm italic text-indigo-900">Covered by:</p>
      <select
        onChange={(e) => onChange(e)}
        className=" px-1.5 py-0.5 border text-blue-950 text-sm border-blue-950 bg-white/10 rounded-full w-[14rem]"
        value={cfItem}
      >
        <option value="ocfl">Operating Cash Flow</option>
        <option value="fcfl">Free Cash Flow</option>
      </select>
    </div>
  );
}

export default CfSelector;
