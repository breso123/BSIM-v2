/* eslint-disable react/prop-types */
function Select({ children, title, value, onChange }) {
  return (
    <div className="flex items-center justify-center gap-2 w-full">
      <p className="w-1/3 text-sm text-blue-950">{title}:</p>
      <select
        className=" bg-white/5 w-2/3 border border-blue-950 text-blue-950 font-sans rounded-xl text-sm px-3 italic"
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
    </div>
  );
}

export default Select;
