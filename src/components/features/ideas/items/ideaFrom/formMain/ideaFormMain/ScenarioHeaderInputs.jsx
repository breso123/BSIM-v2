import { useDispatch, useSelector } from "react-redux";
import { setErrors, typeTG, typeWACC } from "../../../../newIdeaSlice";
import { useState } from "react";
import { formatPercentage } from "../../../../../../../helpers/formatters";

function ScenarioHeaderInputs() {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  const { wacc, tg } = useSelector((state) => state.newIdea);
  const { estimates } = useSelector((state) => state.analysis);
  const { growth } = estimates;

  function handleChangeWacc(e) {
    e.preventDefault();
    dispatch(typeWACC(e.target.value));
    dispatch(setErrors());
  }

  function handleChangeTG(e) {
    e.preventDefault();
    dispatch(typeTG(e.target.value));
    dispatch(setErrors());
  }
  return (
    <div className=" h-7 flex items-center gap-6  absolute top-[10px] left-1/2 translate-x-[-50%]">
      <div className="flex items-center gap-3">
        <label className="text-sm text-fuchsia-700 italic font-sans">
          W.A.C.C.
        </label>
        <input
          onChange={(e) => handleChangeWacc(e)}
          value={wacc}
          placeholder="x.x%"
          className="w-16 h-6 border rounded-sm border-stone-700 pl-1 text-sm"
        />
      </div>
      <div className="flex items-center gap-3">
        <label className="text-sm text-blue-800 font-semibold font-sans">
          T-growth
        </label>
        <input
          value={tg}
          onChange={(e) => handleChangeTG(e)}
          placeholder="x.x%"
          className="w-16 h-6 border rounded-sm border-stone-700 pl-1 text-sm"
        />
      </div>
      <button
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        className="h-10 w-10 flex items-center justify-center rounded-full hover:cursor-pointer relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="midnightblue"
          className="h-10 w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
        <div
          className={`h-[4.5rem] w-64 absolute bg-indigo-700 text-white shadow-statPrice rounded-xl top-[60px] left-0 py-1 px-2 font-sans ${
            hovered ? "block" : "hidden"
          }`}
        >
          <p className="text-sm text-justify">
            Analysts forecasted <b>{formatPercentage(growth?.next_year)} </b>
            growth for this year and CAGR of
            <b> {formatPercentage(growth?.next_5_years_pa)}</b> for the next
            five years.
          </p>
        </div>
      </button>
    </div>
  );
}

export default ScenarioHeaderInputs;
