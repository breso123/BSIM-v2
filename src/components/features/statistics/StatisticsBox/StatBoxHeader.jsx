/* eslint-disable react/prop-types */
import Legend1 from "../../../../ui/reusableLegend/Legend1";
import Select1 from "../../../../ui/selects/Select1";

function StatBoxHeader({
  title,
  inputEl,
  legend = null,
  input = false,
  subtitle = null,
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

      {legend && <Legend1 type="leg3" data={legend} />}
      {input && (
        <Select1
          value={inputEl}
          onChange={(e) => handleChange(e)}
          type="statBox"
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
        </Select1>
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
