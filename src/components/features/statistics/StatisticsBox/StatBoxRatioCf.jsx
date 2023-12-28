/* eslint-disable react/prop-types */
import Box from "../../../../ui/box/Box";
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
    <Box type="returns">
      <StatBoxHeader title={title} />
      <StatBoxMain>
        <div className="grid grid-cols-2 items-center mt-8 justify-items-center w-[90%] divide-x divide-blue-950/25">
          <BoxCfSHD title="Debt" data={ratios.debt} />
          <BoxCfSHD title="Shareholders' Distribution" data={ratios.shd} />
        </div>
        <CfSelector onChange={handleChange} cfItem={cfItem} />
      </StatBoxMain>
    </Box>
  );
}

export default StatBoxRatioCf;
