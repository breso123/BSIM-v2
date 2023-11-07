import { useLoaderData, useParams } from "react-router-dom";
import { loadDefault } from "../../../pages/services/apiFinancials";
import HeaderStatistics from "../statistics/HeaderStatistics";
import {
  formatInterface2,
  formatPercentage,
} from "../../../helpers/formatters";
import Shareholder from "./Shareholder";
import ShareholderMain from "./ShareholderMain";

function ShareholdersContent() {
  const shareholders = useLoaderData();
  const { shKey } = useParams();
  const data =
    shareholders[
      `data_${shKey
        .split("_")
        .map((k) => k[0].toUpperCase())
        .join("")}`
    ];

  function mapReduce(item) {
    return data.map((d) => d[item]).reduce((d, acc) => d + acc, 0);
  }

  const headerOpts = {
    type: "header",
    name: "Holder Name",
    shares: "Shares",
    value: "Value",
    percent: "% of shares",
    weight: "% Weight",
    date: "Date",
  };

  const totalOpts = {
    type: "total",
    name: "TOTAL",
    shares: formatInterface2(mapReduce("shares"), true),
    value: formatInterface2(mapReduce("value"), true),
    percent: formatPercentage(mapReduce("percent_held")),
    weight: "-",
    date: "-",
  };

  return (
    <div className="h-full w-[65.9rem] border-t-2 border-l-2 border-solid border-blue-950 px-4 relative">
      <HeaderStatistics />
      <div className="flex items-center justify-center w-full overflow-hidden">
        <div className="flex flex-col items-center ml-4 mt-5 w-[90%] justify-center text-center">
          <Shareholder options={headerOpts} />
          <ShareholderMain data={data} />
          <Shareholder options={totalOpts} />
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  const data_FH = await loadDefault("fundHolders");
  const data_IH = await loadDefault("institutionHolders");
  const dataCombined = { data_FH, data_IH };

  return dataCombined;
}

export default ShareholdersContent;
