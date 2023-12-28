import { formatInterface2 } from "../../../../../../../helpers/formatters";
import { getFinalTitle } from "../../../../helpers/stringers";
import { stylesInfoTab } from "../../../../helpers/tableStyles";

/* eslint-disable react/prop-types */
function InfoTable({ arr, item, str }) {
  const checkPerc = ["Growth", "Margin"].some((itm) => itm === item);
  const title = getFinalTitle(item, str);

  return (
    <div
      style={{ gridTemplateColumns: "1fr 4fr" }}
      className={`w-full grid grid-cols-2 text-xs items-center px-2 ${stylesInfoTab[item]}`}
    >
      <span className="w-full text-left">{title}</span>
      <div className={`grid grid-cols-${arr.length}`}>
        {arr?.map((per, i) => (
          <span
            key={i}
            className={`w-full ${
              checkPerc ? (per < 0 ? "text-red-700" : "text-blue-800") : ""
            }`}
          >
            {item === "Periods" && per}
            {item === "Value" && formatInterface2(per)}
            {checkPerc && (!per ? "-" : (per * 100).toFixed(1))}
            {item === "Debt/EBITDA" && per.toFixed(1)}
          </span>
        ))}
      </div>
    </div>
  );
}

export default InfoTable;
