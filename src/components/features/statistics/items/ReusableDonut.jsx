/* eslint-disable react/prop-types */

import { formatPercentage } from "../../../../helpers/formatters";
import Chart from "./Chart";

function ReusableDonut({ data, colors }) {
  return (
    <>
      <Chart data={data} />

      <div className="flex flex-col items-center w-full">
        {data.map((d, i) => (
          <div
            key={i}
            className="w-full flex items-center justify-center gap-2 text-ce
            "
          >
            <div className="flex items-center justify-center gap-2 w-16">
              <div
                style={{ backgroundColor: colors[i] }}
                className="h-1 w-4 rounded-full bg-blue-700 text-center"
              ></div>
              <p
                className="text-xs font-semibold text-center w-full"
                style={{ color: colors[i] }}
              >
                {formatPercentage(d)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ReusableDonut;
