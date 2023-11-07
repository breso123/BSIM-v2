/* eslint-disable react/prop-types */
import { itemUnstringed } from "../../../../helpers/formatters";
import { determineOscillatorAction } from "../../../../helpers/miscFuncs";
import TableItemContent from "./TableItemContent";

function OscTable({ oscillators, timeFrame }) {
  return (
    <>
      {Object.entries(oscillators).map((ma, i) => {
        const indStr = itemUnstringed(ma[0]);
        const tgtObj = ma[1][timeFrame];
        const { action, col, value } = determineOscillatorAction(tgtObj, ma[0]);

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

export default OscTable;
