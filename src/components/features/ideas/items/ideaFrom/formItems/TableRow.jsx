/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { stylesTable1, stylesTable2 } from "../../../helpers/tableStyles";
import { tableData } from "../../../helpers/tableData";
import GridderLeft from "../../../../../../ui/gridders/GridderLeft";
import GridderRight from "../../../../../../ui/gridders/GridderRight";
import GridderVals from "../../../../../../ui/gridders/GridderVals";
import Trm from "./TableRowItems/TableRowMain";

function TableRow({ vals, idea, item, dcfSum = null, ae = false }) {
  const { ideasKey } = useParams();
  const chIK = ideasKey === "discounted_cf";
  const items = tableData(chIK, idea.valuation);
  const styles = ae ? stylesTable2 : stylesTable1;
  const tgtItem = items.find((itm) => itm[0] === item);
  const ch = ["total", "cash", "fas", "debt", "nci", "eqv", "shares", "ivps"];
  const checkCol1 = ch.some((itm) => item === itm);
  const cols = checkCol1 ? "1" : "9";

  return (
    <GridderVals
      gtc="1fr 3fr"
      additional={`${styles[item]} ${!ae && "hover:shadow-hoverFins"}`}
      type="ideaTab"
    >
      <GridderLeft type="ideaTab">{tgtItem[1]}</GridderLeft>
      <GridderRight cols={cols} type="ideaTab">
        {!checkCol1 ? (
          vals?.map((period, i) => (
            <Trm key={i} i={i} tg={tgtItem} item={item} period={period} />
          ))
        ) : (
          <p className="w-full text-right">{tgtItem[2](dcfSum)}</p>
        )}
      </GridderRight>
    </GridderVals>
  );
}

export default TableRow;
