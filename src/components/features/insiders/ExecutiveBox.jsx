/* eslint-disable react/prop-types */
import { formatInterface2 } from "../../../helpers/formatters";
import ReusableImage from "../../reusableImages/ReusableImage";

function ExecutiveBox({ type, ex }) {
  const styles = {
    ceo: [
      "bg-lime-300/25 col-span-4 w-[60%] h-[12rem]",
      "justify-start gap-2",
      "text-blue-950",
      "text-lg",
      "",
    ],
    cfocoo: [
      "bg-sky-300/20 w-[95%] col-span-2 h-[11rem]",
      "justify-start gap-2",
      "text-indigo-800",
      "text-lg",
      "",
    ],
    others: [
      "bg-orange-100/25 w-[90%] h-[13rem]",
      "justify-start gap-1",
      "text-blue-700 text-sm",
      "text-[14px]",
      "flex-col gap-2 mb-5 text-sm",
    ],
  };

  const image = {
    ceo: "https://freesvg.org/img/crown512.png",
    cfocoo: "https://cdn-icons-png.flaticon.com/512/2516/2516044.png",
    others:
      "https://cdn4.iconfinder.com/data/icons/business-office-blue-series/64/a-11-512.png",
  };

  return (
    <div
      className={`flex flex-col px-2 py-4 shadow-statPrice ${styles[type][0]}`}
    >
      <div
        className={`flex items-center justify-start  h-[15%] ${
          styles[type][1] ?? ""
        }`}
      >
        <div>
          <ReusableImage src={image[type]} additionalStyles="h-10 w-10" />
        </div>
        <p
          className={`text-blue-950 drop-shadow-gridderInd font-semibold font-serif ${
            styles[type][2] ?? ""
          }`}
        >
          {ex?.title}
        </p>
      </div>
      <div className="h-[70%] flex items-center justify-center">
        <p
          className={`text-xl italic text-indigo-900 font-serif ${
            styles[type][3] ?? ""
          }`}
        >
          {ex?.name}
        </p>
      </div>
      <div
        className={`flex items-center justify-between h-[15%] px-6 font-mono ${
          styles[type][4] ?? ""
        }`}
      >
        <p className="italic">Age: {ex?.age}</p>
        <p className="font-semibold text-sky-800">
          Annual Pay: {formatInterface2(ex?.pay, true)}
        </p>
      </div>
    </div>
  );
}

export default ExecutiveBox;
