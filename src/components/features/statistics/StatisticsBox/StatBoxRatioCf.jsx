/* eslint-disable react/prop-types */
import BoxCfSHD from "../items/BoxCfSHD";
import CfSelector from "../items/CfSelector";
import { switchCfItem } from "../statisticsSlice";
import StatBoxHeader from "./StatBoxHeader";
import StatBoxMain from "./StatBoxMain";
import { useDispatch, useSelector } from "react-redux";

function StatBoxRatioCf({ title, ratios }) {
  const cfItem = useSelector((state) => state.statistics.cfItem);
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    dispatch(switchCfItem(e.target.value));
  }

  return (
    <div className="flex flex-col items-center justify-center h-86 w-[95%] mb-2 mt-1 p-2 bg-orange-100/25 relative shadow-statPrice col-span-2">
      <StatBoxHeader title={title} />
      <StatBoxMain>
        <div className="grid grid-cols-2 items-center mt-8 justify-items-center w-[90%] divide-x divide-blue-950/25">
          <BoxCfSHD title="Debt" data={ratios.debt} />
          <BoxCfSHD title="Shareholders' Distribution" data={ratios.shd} />
        </div>
        <CfSelector onChange={handleChange} cfItem={cfItem} />
      </StatBoxMain>
    </div>
  );
}

export default StatBoxRatioCf;
