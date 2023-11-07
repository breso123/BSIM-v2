import { useState } from "react";
import StatBoxHeader from "../../statistics/StatisticsBox/StatBoxHeader";
import StatBoxMain from "../../statistics/StatisticsBox/StatBoxMain";
import { itemStringed } from "../../../../helpers/formatters";
import RecomChart from "../items/RecomChart";
import RecomLegend from "./RecomLegend";
import Rating from "../items/Rating";
import { useSelector } from "react-redux";

function RecomBox() {
  const { trends, rating } = useSelector((state) => state.analysis.recoms);
  const [inputEl, setInputEl] = useState("Current Month");
  const cols = ["#172554", "#0c4a6e", "#4c1d95", "#9a3412", "#b91c1c"];
  const titles = ["Strong Buy", "Buy", "Hold", "Sell", "Strong Sell"];
  const inputVal = itemStringed(inputEl);
  const tgtPer = trends?.[inputVal];
  const values = Object.values(tgtPer ?? {});
  const numAnly = values?.reduce((el, acc) => el + acc, 0);
  const weights = values?.map((el) => el / numAnly);

  return (
    <div className="flex flex-col items-center justify-center h-[95%] w-full mb-2 mt-1 p-2 relative bg-orange-100/25 shadow-statPrice col-span-2">
      <StatBoxHeader
        title="Analyst Recommendations"
        inputEl={inputEl}
        input={[
          "Current Month",
          "Previous Month",
          "2 Months ago",
          "3 Months ago",
        ]}
        onSetInputEl={setInputEl}
      />
      <StatBoxMain>
        <div className="h-full w-full flex items-center justify-around">
          <div className="flex flex-col items-start justify-center h-full w-1/2 absolute top-0 left-0">
            <div className=" flex flex-col items-start justify-center gap-4 pl-8 pb-16">
              {titles.map((t, i) => (
                <RecomLegend key={i} t={t} col={cols[i]} value={values[i]} />
              ))}
            </div>
            <p className="ml-24 w-64 text-2xl text-indigo-900 text-center font-serif">
              Recommendations of{" "}
              <span className="italic font-semibold tracking-wide">
                {numAnly}
              </span>{" "}
              analysts
            </p>
          </div>
          <Rating rating={rating} />
          <RecomChart data={weights} cols={cols} />
        </div>
      </StatBoxMain>
    </div>
  );
}

export default RecomBox;
