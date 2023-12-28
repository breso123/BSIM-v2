/* eslint-disable react/prop-types */
function InputSCH({ name, item, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <label className="text-sm text-fuchsia-700 font-semibold font-sans">
        {name}
      </label>
      <input
        value={item}
        onChange={onChange}
        placeholder="x.x%"
        className="w-16 h-6 border rounded-sm border-stone-700 pl-1 text-sm"
      />
    </div>
  );
}

export default InputSCH;
