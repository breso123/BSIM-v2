/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import BarsBI from "./BarsBI";
import useScoreBI from "./useScoreBI";
import { switchClickedScore, switchTs } from "./scoreSlice";
import useDetails from "./scoreDetails/useDetails";
import Box from "../../../ui/box/Box";

function ScoreBreakdownBox({ ts, i }) {
  const pts = useScoreBI();
  const dispatch = useDispatch();
  const details = useDetails(ts);
  if (pts.some((pt) => !pt?.points)) return;
  const type = pts[i]?.points < 0 ? "scoreNeg" : "scorePos";

  function handleClick(e) {
    e.preventDefault();
    dispatch(switchClickedScore(details));
    dispatch(switchTs(ts));
  }

  return (
    <Box onClick={(e) => handleClick(e)} type={type}>
      <p className="w-full h-[10%] text-blue-950 font-semibold italic drop-shadow-gridderInd">
        {ts}
      </p>
      <BarsBI type="body" maxVal={pts[i]?.max} val={pts[i]?.points} />
    </Box>
  );
}

export default ScoreBreakdownBox;
