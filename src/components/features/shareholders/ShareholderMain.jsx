/* eslint-disable react/prop-types */
import {
  formatInterface2,
  formatPercentage,
} from "../../../helpers/formatters";
import Shareholder from "./Shareholder";

function ShareholderMain({ data }) {
  return (
    <div className="w-full py-1 mt-3 max-h-[30rem] overflow-scroll">
      {data.map((hd, i) => {
        const itemOpts = {
          type: "item",
          name: hd.entity_name,
          shares: formatInterface2(hd.shares, true),
          value: formatInterface2(hd.value, true),
          percent: formatPercentage(hd.percent_held),
          weight: formatPercentage(0.2243),
          date: hd.date_reported,
        };

        return <Shareholder key={i} options={itemOpts} />;
      })}
    </div>
  );
}

export default ShareholderMain;
