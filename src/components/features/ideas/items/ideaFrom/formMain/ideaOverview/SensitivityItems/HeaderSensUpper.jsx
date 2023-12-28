import Select1 from "../../../../../../../../ui/selects/Select1";

/* eslint-disable react/prop-types */
function HeaderSensUpper({ setRangeVal, rangeVal, idea }) {
  const regular = [0.05, 0.1, 0.15, 0.2, 0.25, 0.3];
  const add = [0.35, 0.4, 0.45, 0.5];
  const tgtArr = idea.valuation !== "DCF" ? [...regular, ...add] : regular;

  function handleChange(e) {
    e.preventDefault();
    setRangeVal(e.target.value);
  }

  return (
    <div className="absolute top-[-25px] px-2 text-xs w-full text-purple-800 italic flex items-center justify-between">
      <p>W.A.C.C. (%)</p>
      <div className="flex items-center gap-1 text-xs text-blue-950 font-semibold tracking-wide">
        <p className="mr-2">
          Max {idea.valuation === "DCF" ? "Growth" : "Multiple"} Deviation:
        </p>
        <Select1
          value={rangeVal}
          type="multiDev"
          onChange={(e) => handleChange(e)}
        >
          {tgtArr.map((el, i) => (
            <option key={i} value={el}>
              {el * 100}%
            </option>
          ))}
        </Select1>
      </div>
    </div>
  );
}

export default HeaderSensUpper;
