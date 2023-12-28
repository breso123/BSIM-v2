import { configureStore } from "@reduxjs/toolkit";
import financialsReducer from "./components/features/financials/financialsSlice";
import generalReducer from "./components/features/general/generalSlice";
import statisticsReducer from "./components/features/statistics/statisticsSlice";
import analysisReducer from "./components/features/analysis/analysisSlice";
import insidersReducer from "./components/features/insiders/insidersSlice";
import technicalsReducer from "./components/features/technicals/technicalsSlice";
import ideasReducer from "./components/features/ideas/ideasSlice";
import newIdeaReducer from "./components/features/ideas/newIdeaSlice";
import scorebiReducer from "./components/features/BI-score/scoreSlice";
import appReducer from "./components/appSlice";

const store = configureStore({
  reducer: {
    financials: financialsReducer,
    general: generalReducer,
    statistics: statisticsReducer,
    analysis: analysisReducer,
    insiders: insidersReducer,
    technicals: technicalsReducer,
    ideas: ideasReducer,
    newIdea: newIdeaReducer,
    scorebi: scorebiReducer,
    app: appReducer,
  },
});

export default store;
