/* eslint-disable react/prop-types */

import { maString } from "../../../../helpers/formatters";
import { determineAction } from "../../../../helpers/miscFuncs";
import TableItemContent from "./TableItemContent";

function MovingAvgsTable({ movingAvgs, price, timeFrame }) {
  return (
    <>
      {Object.entries(movingAvgs).map((ma, i) => {
        const indStr = maString(ma[0]);
        const value = Object.values(ma[1][timeFrame])[1];
        const { action, col } = determineAction(ma[0], value, price);

        return (
          <TableItemContent
            key={i}
            is={indStr}
            action={action}
            col={col}
            value={value}
          />
        );
      })}
    </>
  );
}

export default MovingAvgsTable;
