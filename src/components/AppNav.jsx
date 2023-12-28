/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  refetchItems,
  switchContentKey,
  switchFeatureKey,
  switchSelectedFeature,
} from "./appSlice";
import { itemStringed } from "../helpers/formatters";
import { leaveChart } from "./features/financials/financialsSlice";
import ReusableImage from "./reusableImages/ReusableImage";
import AppNavBtn from "./AppNavBtn";

const features = [
  "general",
  "news",
  "ideas",
  "financials",
  "statistics",
  "analysis",
  "shareholders",
  "insiders",
  "options",
  "technicals",
  "scorebi",
];

function AppNav() {
  const { selected } = useSelector((state) => state.app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function targetFT(k) {
    if (k === "financials") return "/income_statement";
    if (k === "news") return "/all_news";
    if (k === "shareholders") return "/fund_holders";
    if (k === "options") return "/calls";
    if (k === "technicals") return "/all";
    if (k === "ideas") return "/discounted_cf";
    if (k === "scorebi") return "/total";
    else return "";
  }

  function handleClick(e, k) {
    e.preventDefault();
    console.log(itemStringed(k), k);
    dispatch(switchFeatureKey(itemStringed(k)));
    dispatch(switchContentKey({ index: 0 }));
    k === "financials" && dispatch(leaveChart());
    navigate(`/app/${k}${targetFT(k)}`);
  }

  return (
    <nav className="w-screen h-[4.25rem] flex items-center justify-between mb-4 bg-white/50 shadow-watchList px-4">
      <ul className="flex items-center justify-evenly gap-6  rounded-full ">
        <div className="flex items-center justify-center relative mr-4">
          <ReusableImage
            src="https://cdn-icons-png.flaticon.com/512/8728/8728409.png"
            additionalStyles="h-[4rem] w-[4rem]"
          />
          <div className="absolute top-1 left-3">
            <ReusableImage
              src="https://freepngimg.com/download/stock_market/26072-3-stock-market-file.png"
              additionalStyles="h-[4rem] w-[5rem]"
            />
          </div>
        </div>
        {features.map((ft, i) => {
          function onClick(e) {
            handleClick(e, ft);
            dispatch(switchSelectedFeature(ft));
          }

          return (
            <AppNavBtn
              key={i}
              isSelected={ft === selected}
              ft={ft}
              onClick={(e) => onClick(e)}
            />
          );
        })}
      </ul>
      <button
        onClick={() => dispatch(refetchItems())}
        className=" w-36 h-10 bg-blue-950 rounded-full text-sm font-semibold text-sky-200 hover:italic hover:text-orange-400"
      >
        <NavLink to="/">Main Lobby &rarr;</NavLink>
      </button>
    </nav>
  );
}

export default AppNav;
