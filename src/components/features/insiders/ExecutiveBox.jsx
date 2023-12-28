/* eslint-disable react/prop-types */
import { formatInterface2 } from "../../../helpers/formatters";
import Box from "../../../ui/box/Box";
import ReusableImage from "../../reusableImages/ReusableImage";

function ExecutiveBox({ type, ex }) {
  const text = type === "others" ? "text-md" : "text-xl";
  const othersAdd = type === "others" ? "flex-col gap-2 mb-5 text-sm" : "";

  const image = {
    ceo: "https://freesvg.org/img/crown512.png",
    cfocoo: "https://cdn-icons-png.flaticon.com/512/2516/2516044.png",
    others:
      "https://cdn4.iconfinder.com/data/icons/business-office-blue-series/64/a-11-512.png",
  };

  return (
    <Box type={type}>
      <div className="flex items-center justify-start h-[15%] ">
        <div>
          <ReusableImage src={image[type]} additionalStyles="h-10 w-10" />
        </div>
        <p className="text-blue-950 drop-shadow-gridderInd font-semibold font-serif">
          {ex?.title}
        </p>
      </div>
      <div className="h-[70%] flex items-center justify-center">
        <p className={`italic text-indigo-900 font-serif ${text}`}>
          {ex?.name}
        </p>
      </div>
      <div
        className={`flex items-center justify-between h-[15%] px-6 font-mono ${othersAdd}`}
      >
        <p className="italic">Age: {ex?.age}</p>
        <p className="font-semibold text-sky-800">
          Annual Pay: {formatInterface2(ex?.pay, true)}
        </p>
      </div>
    </Box>
  );
}

export default ExecutiveBox;
