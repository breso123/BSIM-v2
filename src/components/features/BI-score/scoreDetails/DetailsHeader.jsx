import { useDispatch, useSelector } from "react-redux";
import { removeClickedScore } from "../scoreSlice";
import ButtonClose from "../../../../ui/buttons/ButtonClose";

function DetailsHeader() {
  const { ts } = useSelector((state) => state.scorebi);
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(removeClickedScore());
  }
  return (
    <div className="h-12 px-2 w-full bg-slate-300/50 rounded-t-lg flex items-center justify-between shadow-statPrice2">
      <p className="text-stone-900 text-[0.8rem] tracking-wide font-sans ml-4">
        Category: <span className="italic font-semibold ml-1">{ts}</span>
      </p>
      <p className="mr-8 italic text-sm text-slate-900">2021-2019</p>
      <ButtonClose onClick={(e) => handleClick(e)} />
    </div>
  );
}

export default DetailsHeader;
