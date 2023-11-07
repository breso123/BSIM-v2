import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEarnings,
  fetchGeneral,
  fetchStock,
  fetchStockFull,
} from "./components/features/general/generalSlice";
import { fetchStatements } from "./components/features/financials/financialsSlice";
import {
  fetchEstimates,
  fetchRatings,
  fetchRecoms,
} from "./components/features/analysis/analysisSlice";
import {
  fetchExecutives,
  fetchTransactions,
} from "./components/features/insiders/insidersSlice";
import { fetchStatistics } from "./components/features/statistics/statisticsSlice";
import {
  fetchLogo,
  itemsFetched,
  switchSelectedFeature,
  urlRefreshed,
} from "./components/appSlice";
import {
  fetchMovingAverages,
  fetchOscillators,
} from "./components/features/technicals/technicalsSlice";
import { fetchIdeas } from "./components/features/ideas/ideasSlice";

export function useShouldRefetch() {
  const dispatch = useDispatch();
  const SR = useSelector((state) => state.app.shouldRefetch);
  const urlFull = window.location.href.split("/app")[1].split("/");
  console.log(urlFull[1]);

  useEffect(() => {
    if (SR) {
      dispatch(fetchGeneral());
      dispatch(fetchEarnings());
      dispatch(fetchStock());
      dispatch(fetchStockFull());
      dispatch(fetchStatements());
      dispatch(fetchStatistics());
      dispatch(fetchEstimates());
      dispatch(fetchRecoms());
      dispatch(fetchRatings());
      dispatch(fetchExecutives());
      dispatch(fetchTransactions());
      dispatch(fetchMovingAverages());
      dispatch(fetchOscillators());
      dispatch(fetchLogo());
      dispatch(fetchIdeas());
      dispatch(
        urlRefreshed({
          fk: urlFull[1] || "general",
          ck: urlFull[2] || "stock_chart",
        })
      );
      dispatch(switchSelectedFeature(urlFull[1]));
      dispatch(itemsFetched());
    }

    return;
  }, [dispatch, SR, urlFull]);
}
