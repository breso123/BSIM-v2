import Select1 from "../../../../../ui/selects/Select1";

/* eslint-disable react/prop-types */
function CagrHead({ onChange, cagr, cagrRev, title }) {
  return (
    <div className="flex h-[10%] w-full items-center justify-between ">
      <p
        style={{ textShadow: "3px 3px 10px rgba(25, 25, 112, 0.5)" }}
        className="text-lg text-blue-900/80 font-semibold"
      >
        {title}
      </p>
      <Select1 value={cagr} onChange={onChange} type="cagr">
        {Object.keys(cagrRev).map((_, i) => (
          <option className="text-sm" key={i} value={i + 1}>
            {i + 1}Y
          </option>
        ))}
      </Select1>
    </div>
  );
}

export default CagrHead;
