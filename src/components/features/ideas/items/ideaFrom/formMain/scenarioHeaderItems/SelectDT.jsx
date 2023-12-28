/* eslint-disable react/prop-types */
function SelectDT({ data }) {
  return (
    <select
      onChange={(e) => data.onChange(e)}
      className="bg-white/10 border-x px-3 text-blue-950 italic border-blue-950 rounded-full"
      value={data.item}
    >
      {data.vals.map((d, i) => (
        <option key={i} value={d}>
          {data.names[i]}
        </option>
      ))}
    </select>
  );
}

export default SelectDT;
