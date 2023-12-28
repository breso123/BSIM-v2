/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { switchIndex, switchTimeFrame } from "./scoreSlice";
import ButtonPaginMini from "../../../ui/buttons/ButtonPaginMini";

function MultipleYearBtns({ type }) {
  const { statements } = useSelector((state) => state.financials);
  const { timeFrame, index } = useSelector((state) => state.scorebi);
  const dispatch = useDispatch();

  const latestPer = new Date(
    statements?.income_statement?.[index].fda
  ).getFullYear();
  const latestInd = statements?.income_statement?.length - 1;
  if (!latestPer || !latestInd) return;

  function timeFrameBack(e) {
    e.preventDefault();
    type === "multiYears" &&
      timeFrame !== "Y1" &&
      dispatch(switchTimeFrame(`Y${+timeFrame[1] - 1}`));
    type === "oneYear" && index !== 0 && dispatch(switchIndex(index - 1));
  }

  function timeFrameForw(e) {
    e.preventDefault();
    type === "multiYears" &&
      timeFrame !== "Y3" &&
      dispatch(switchTimeFrame(`Y${+timeFrame[1] + 1}`));
    type === "oneYear" && index < latestInd && dispatch(switchIndex(index + 1));
  }
  return (
    <div className="flex items-center justify-center gap-3">
      <ButtonPaginMini dir="left" onClick={(e) => timeFrameBack(e)} />
      <span>
        {type === "oneYear" ? `${latestPer}` : `${timeFrame[1]}-Year`}
      </span>
      <ButtonPaginMini dir="right" onClick={(e) => timeFrameForw(e)} />
    </div>
  );
}

export default MultipleYearBtns;
