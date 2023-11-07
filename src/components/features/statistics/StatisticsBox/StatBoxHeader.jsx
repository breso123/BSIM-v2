/* eslint-disable react/prop-types */
import LegendST from "../items/LegendST";

function StatBoxHeader({
  title,
  inputEl,
  legend = null,
  input = null,
  subtitle = null,
  colors = ["midnightblue", "#4338ca"],
  onSetInputEl,
}) {
  function handleChange(e) {
    e.preventDefault();
    onSetInputEl(e.target.value);
  }

  return (
    <div className="flex items-center justify-between w-full h-[10%] px-4">
      <p className="text-xl font-semibold italic font-sans tracking-wide text-blue-800 drop-shadow-gridderInd">
        {title}
      </p>
      {legend && <LegendST values={legend} colors={colors} />}
      {input && (
        <select
          className="w-[12rem] h-[1.5rem] bg-white/10 text-sm border-solid border border-blue-950 text-blue-950 rounded-lg "
          onChange={(e) => handleChange(e)}
          value={inputEl}
        >
          {input.map((inp, i) => {
            return (
              <option value={inp} key={i}>
                {inp
                  .split("_")
                  .map((i) => i[0].toUpperCase() + i.slice(1))
                  .join(" ")}
              </option>
            );
          })}
        </select>
      )}
      {subtitle && (
        <p className="absolute top-[13rem] text-xs italic text-purple-900 tracking-wider">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default StatBoxHeader;
