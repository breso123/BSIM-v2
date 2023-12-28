import { useDispatch, useSelector } from "react-redux";
import ScoreControlItem from "./ScoreControlItem";
import { switchIndex, switchTimeFrame, switchTimeType } from "./scoreSlice";
import MultipleYearBtns from "./MultipleYearBtns";

function ScoreControl() {
  const { timeType } = useSelector((state) => state.scorebi);
  const dispatch = useDispatch();

  function handleClick1P(e) {
    e.preventDefault();
    dispatch(switchTimeType("oneYear"));
    dispatch(switchTimeFrame("Y1"));
  }

  function handleClickMP(e) {
    e.preventDefault();
    dispatch(switchTimeType("multipleYear"));
    dispatch(switchIndex(0));
  }

  return (
    <div className="divide-x divide-blue-950/50 flex items-center justify-center absolute top-4 left-1/2 translate-x-[-50%]">
      <ScoreControlItem
        item="One period"
        opacity={`${timeType === "oneYear" ? "opacity-100" : "opacity-50"}`}
        onClick={(e) => handleClick1P(e)}
      >
        <MultipleYearBtns type="oneYear" />
      </ScoreControlItem>
      <ScoreControlItem
        item="Multiple periods"
        opacity={`${timeType !== "oneYear" ? "opacity-100" : "opacity-50"}`}
        onClick={(e) => handleClickMP(e)}
      >
        <MultipleYearBtns type="multiYears" />
      </ScoreControlItem>
    </div>
  );
}

export default ScoreControl;
