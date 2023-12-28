import {
  dcImprovement,
  stddrCovOpts,
  tdCovOpts,
} from "../options/optionsDebtCov";
import { getObj } from "./others";

// Criteria & Points array loops
export function pointGetter(item, cr, max, pts, isDbt = false) {
  let score;

  cr.forEach((c, i, arr) => {
    const points = isDbt ? pts[i + 1] : pts[i];
    if (!arr[i + 1]) return;
    if (item > c && item <= arr[i + 1]) {
      score = { max, points: points };
    }
  });
  if (item > cr[cr.length - 1]) score = { max, points: pts[pts.length - 1] };

  return score;
}

// Find basic item points
export function getMarginPoints(item, margin, per) {
  const chOptItems = ["cr", "car", "las", "de", "lev"];
  const obj = getObj(margin);
  const max = obj.max;
  const cr = margin === "revGr" ? obj.criteria[per] : obj.criteria;
  const chLq = chOptItems.some((itm) => margin === itm);
  const itemAbs = chLq ? item : Math.abs(item);
  const pts = chLq
    ? obj.points
    : item > 0
    ? obj.points
    : obj.points.map((pt) => pt * -1);

  if (chLq && itemAbs <= cr[0]) return { max, points: [pts[0]] };
  return pointGetter(itemAbs, cr, max, pts, chLq);
}

// Find alternative item points (Debt Coverage)
export function getPointsDC(ocfl, debt, opts) {
  const item = ocfl / debt;
  const cr = opts.criteria;
  const pts = opts.points;
  const max = opts.max;

  if (item <= cr[0] || (ocfl < 0 && debt)) return { max, points: pts[0] };
  if (!debt) return { max, points: pts[7] };
  else return pointGetter(item, cr, max, pts, true);
}

// Find item improvement points
export function getImprovementPts(item, per, obj, isDbt = false) {
  const cond = isDbt ? item < 0 : item > 0;
  const max = obj.max;
  const cr = obj.criteria[per];
  const pts = cond ? obj.points : obj.points.map((pt) => pt * -1);
  const itemAbs = Math.abs(item);

  return pointGetter(itemAbs, cr, max, pts);
}

// Get total points (item + improvement) - basic
export function getTotalPts(item, itemImp, per, mg, impObj, isDbt = false) {
  const itm = getMarginPoints(item, mg, per);
  const imp = getImprovementPts(itemImp, per, impObj, isDbt);

  if (!imp || !itm) return;
  return { max: itm.max + imp.max, points: itm.points + imp.points };
}

export function totalPtsDC(ocfl, dbtT, stde, dr, per) {
  const td = getPointsDC(ocfl, dbtT, tdCovOpts);
  const std = getPointsDC(ocfl, stde, stddrCovOpts);
  const drc = getPointsDC(ocfl, -dr, stddrCovOpts);
  const tdImp = getImprovementPts(ocfl / dbtT, per, dcImprovement);
  const stdImp = getImprovementPts(ocfl / stde, per, dcImprovement);
  const drcImp = getImprovementPts(ocfl / -dr, per, dcImprovement);
  if (!td || !std || !drc || !tdImp || !stdImp || !drcImp) return;

  return {
    max: td.max + tdImp.max + std.max + stdImp.max + drc.max + drcImp.max,
    points:
      td.points +
      tdImp.points +
      std.points +
      stdImp.points +
      drc.points +
      drcImp.points,
  };
}
