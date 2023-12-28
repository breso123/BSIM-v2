import { useSelector } from "react-redux";
import {
  getAverageItem,
  getAvgImprovement,
  getMarginWA,
  getRevGrowth,
  getStatItem,
} from "./helpers/itemGettersTF";

function useItemsFS() {
  const { statements } = useSelector((state) => state.financials);
  const { index, timeFrame, timeType } = useSelector((state) => state.scorebi);
  const {
    income_statement: is,
    balance_sheet: bs,
    cash_flow: cf,
    financial_ratios: ra,
  } = statements;

  // IS items
  const nin = getStatItem(index, timeFrame, timeType, is, "nin");
  const revGr = getRevGrowth(index, timeFrame, timeType, is, "sa");
  const opMg = getMarginWA(index, timeFrame, timeType, is, is, "oin");
  const opMgImp = getAvgImprovement(index, timeFrame, timeType, is, "oinM");
  const nMg = getMarginWA(index, timeFrame, timeType, is, is, "nin");
  const nMgImp = getAvgImprovement(index, timeFrame, timeType, is, "ninM");

  // BS items
  const la = getAverageItem(index, timeFrame, timeType, bs, "tli");
  const as = getAverageItem(index, timeFrame, timeType, bs, "tas");
  const dbt = getAverageItem(index, timeFrame, timeType, bs, "dbtT");
  const std = getAverageItem(index, timeFrame, timeType, bs, "stde");
  const eq = getAverageItem(index, timeFrame, timeType, bs, "tseq");
  const roa = getAverageItem(index, timeFrame, timeType, bs, "roa");
  const roe = getAverageItem(index, timeFrame, timeType, bs, "roe");
  const roaImp = getAvgImprovement(index, timeFrame, timeType, bs, "roa");
  const roeImp = getAvgImprovement(index, timeFrame, timeType, bs, "roe");
  const revGrImp = getAvgImprovement(index, timeFrame, timeType, is, "saG");

  // CF items
  const ocfl = getStatItem(index, timeFrame, timeType, cf, "ocfl");
  const fcfl = getStatItem(index, timeFrame, timeType, cf, "fcfl");
  const dr = getStatItem(index, timeFrame, timeType, cf, "ltdpa");
  const ocflM = getMarginWA(index, timeFrame, timeType, cf, is, "ocfl");
  const fcflM = getMarginWA(index, timeFrame, timeType, cf, is, "fcfl");
  const ocflImp = getAvgImprovement(index, timeFrame, timeType, cf, "ocflMg");
  const fcflImp = getAvgImprovement(index, timeFrame, timeType, cf, "fcflMg");

  // RA items
  const cr = getAverageItem(index, timeFrame, timeType, ra, "cr");
  const car = getAverageItem(index, timeFrame, timeType, ra, "caR");
  const las = getAverageItem(index, timeFrame, timeType, ra, "lta");
  const db = getAverageItem(index, timeFrame, timeType, ra, "dte");
  const lev = getAverageItem(index, timeFrame, timeType, ra, "lev");
  const crImp = getRevGrowth(index, timeFrame, timeType, ra, "cr");
  const carImp = getRevGrowth(index, timeFrame, timeType, ra, "caR");
  const dcImp = getAvgImprovement(index, timeFrame, timeType, ra, "drc");
  const tdcImp = getAvgImprovement(index, timeFrame, timeType, ra, "tdc");
  const stdcImp = getAvgImprovement(index, timeFrame, timeType, ra, "stdc");
  const lasImp = getAvgImprovement(index, timeFrame, timeType, ra, "lta");
  const dbImp = getAvgImprovement(index, timeFrame, timeType, ra, "dte");
  const levImp = getAvgImprovement(index, timeFrame, timeType, ra, "lev");

  return {
    nin,
    revGr,
    opMg,
    opMgImp,
    nMg,
    nMgImp,
    las,
    as,
    dbt,
    std,
    eq,
    roa,
    roe,
    roaImp,
    roeImp,
    ocfl,
    fcfl,
    dr,
    ocflM,
    fcflM,
    ocflImp,
    fcflImp,
    cr,
    car,
    la,
    db,
    lev,
    crImp,
    carImp,
    dcImp,
    tdcImp,
    stdcImp,
    lasImp,
    dbImp,
    levImp,
    revGrImp,
  };
}

export default useItemsFS;
