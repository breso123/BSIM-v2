/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { itemStringed } from "../../helpers/formatters";
import { switchContentKey } from "../appSlice";
import { useNavigate } from "react-router-dom";
import { leaveChart } from "../features/financials/financialsSlice";

function ButtonApp({ src, item, index, activeIndex }) {
  const clickedContent = itemStringed(item);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const featureKey = useSelector((state) => state.app.featureKey);

  function click(e) {
    e.preventDefault();
    dispatch(switchContentKey({ index }));
    featureKey === "financials" && dispatch(leaveChart());
    navigate(`/app/${featureKey}/${clickedContent}`);
  }
  return (
    <button
      className={`${
        index === activeIndex ? "border-l-4 font-semibold bg-sky-400/25" : ""
      } group w-48 h-12 pl-3 flex items-center justify-start text-blue-950 tracking-wide border-l border-solid border-blue-950 text-xm gap-3 hover:border-l-4 hover:font-semibold hover:bg-sky-400/25 transition-all duration-200 `}
      onClick={(e) => click(e)}
    >
      <span>
        <img
          src={src}
          alt={item}
          className={`h-${
            index === activeIndex ? "8" : "7"
          } group-hover:h-8 transition-all duration-200`}
        />
      </span>
      <span className="text-xs">{item}</span>
    </button>
  );
}

export default ButtonApp;
