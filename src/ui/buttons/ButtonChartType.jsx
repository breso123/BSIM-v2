/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { switchChartType } from "../../components/features/general/generalSlice";
import ReusableImage from "../../components/reusableImages/ReusableImage";

function ButtonChartType({ type }) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() =>
        dispatch(switchChartType(type === "area" ? "candle" : "area"))
      }
      className="shadow-watchList rounded-lg"
    >
      <ReusableImage
        additionalStyles="h-9 w-9 hover:h-10 hover:w-10 transition-all duration-300"
        src={
          type === "candle"
            ? "https://cdn.icon-icons.com/icons2/2911/PNG/512/area_chart_icon_183308.png"
            : "https://cdn-icons-png.flaticon.com/512/6353/6353961.png"
        }
      />
    </button>
  );
}

export default ButtonChartType;
