import { createSlice } from "@reduxjs/toolkit";
import {
  customInputs,
  shares,
  multiples,
  ebmg,
  dbtEb,
} from "./newIdeaInputVals";
import {
  getErrorCOE,
  getErrorDbtEb,
  getErrorEbmg,
  getErrorMulti,
  getErrorTG,
  getErrorWACC,
  getInputError,
  getSharesError,
} from "./helpers/errorHandlers";

const initialState = {
  ...customInputs,
  ...shares,
  ...multiples,
  ...ebmg,
  ...dbtEb,
  errorsInput: {},
  errorsTC: {},
  errorsDCF: {},
  errorShares: {},
  errorMulti: {},
  errorCOE: {},
  errorEBMG: {},
  errorDbtEb: {},
  selectedStep: 1,
  optimistic: [],
  realistic: [],
  pessimistic: [],
  vals: [],
  shares: [],
  multi: [],
  ebmg: [],
  dbtEb: [],
  selectedIdea: "optimistic",
  forecastBy: "cagr",
  forecastBySh: "cagr",
  forecastByMulti: "average",
  forecastByEbmg: "average",
  forecastByDbtEb: "average",
  valuation: "DCF",
  multipleVal: "P/E",
  ivpsDisplay: "Diff",
  sensDisplay: "Value",
  lcDisplay: "Setup",
  chartDisplay: "Bar",
  viewDisplay: "Cards",
  optimisticCAGR: "",
  realisticCAGR: "",
  pessimisticCAGR: "",
  sharesCAGR: "",
  multiCAGR: "",
  ebmgCAGR: "",
  dbtEbCAGR: "",
  wacc: "",
  costOfEquity: "",
  tg: "",
  title: "",
  content: "",
  isSubmitting: false,
};

const newIdeaSlice = createSlice({
  name: "newIdea",
  initialState,
  reducers: {
    setValues(state, action) {
      state[`${action.payload.type}_${action.payload.index}`] =
        action.payload.value;
    },
    setScenarioArr(state, action) {
      state[action.payload.type] = action.payload.arr;
    },
    setPeriods(state, action) {
      state[`period_${action.payload.index}`] = action.payload.item;
    },
    setVals(state, action) {
      state.vals = action.payload;
    },
    switchForecastBy(state, action) {
      state.forecastBy = action.payload;
    },
    switchFcstShares(state, action) {
      state.forecastBySh = action.payload;
    },
    switchFcstMulti(state, action) {
      state.forecastByMulti = action.payload;
    },
    switchFcstEbmg(state, action) {
      state.forecastByEbmg = action.payload;
    },
    switchFcstDbtEb(state, action) {
      state.forecastByDbtEb = action.payload;
    },
    switchSelectedIdea(state, action) {
      state.selectedIdea = action.payload;
    },
    switchChart(state, action) {
      state.chartDisplay = action.payload;
    },
    switchView(state, action) {
      state.viewDisplay = action.payload;
    },
    switchSensDisplay(state, action) {
      state.sensDisplay = action.payload;
    },
    switchValuation(state, action) {
      state.valuation = action.payload;
    },
    switchValMultiple(state, action) {
      state.multipleVal = action.payload;
    },
    setScenarioArray(state, action) {
      state[`${action.payload}`] = [
        +state[`${action.payload}_0`] ?? 0,
        +state[`${action.payload}_1`] ?? 0,
        +state[`${action.payload}_2`] ?? 0,
        +state[`${action.payload}_3`] ?? 0,
        +state[`${action.payload}_4`] ?? 0,
        +state[`${action.payload}_5`] ?? 0,
        +state[`${action.payload}_6`] ?? 0,
        +state[`${action.payload}_7`] ?? 0,
        +state[`${action.payload}_8`] ?? 0,
      ];
    },
    typeCAGR(state, action) {
      state[`${action.payload.type}CAGR`] = action.payload.value;
    },
    typeTitle(state, action) {
      state.title = action.payload;
    },
    typeContent(state, action) {
      state.content = action.payload;
    },
    switchSteps(state, action) {
      state.selectedStep = action.payload;
    },
    setbackSteps(state) {
      state.selectedStep = 1;
    },
    typeWACC(state, action) {
      state.wacc = action.payload;
    },
    typeTG(state, action) {
      state.tg = action.payload;
    },
    typeCOE(state, action) {
      state.costOfEquity = action.payload;
    },
    switchIvpsDisplay(state, action) {
      state.ivpsDisplay = action.payload;
    },
    switchLcDisplay(state, action) {
      state.lcDisplay = action.payload;
    },
    setIsSubmitting(state) {
      state.isSubmitting = true;
    },
    unsetIsSubmitting(state) {
      state.isSubmitting = false;
    },
    setErrorsDCF(state) {
      state.errorsDCF.wacc = getErrorWACC(state);
      state.errorsDCF.tg = getErrorTG(state);
    },
    setErrorCOE(state) {
      state.errorCOE.coe = getErrorCOE(state);
    },
    setErrorShares(state) {
      state.errorShares.shares = getSharesError(state);
    },
    setErrorMulti(state) {
      state.errorMulti.multi = getErrorMulti(state);
    },
    setErrorDbtEb(state) {
      state.errorDbtEb.dbtEb = getErrorDbtEb(state);
    },
    setErrorEbmg(state) {
      state.errorEBMG.ebmg = getErrorEbmg(state);
    },
    setErrorsInput(state) {
      state.errorsInput.cagr = getInputError(state);
    },
    setErrorsTC(state) {
      state.errorsTC.title = state.title === "" ? "Please name your idea" : "";
      state.errorsTC.content =
        state.content === "" ? "Please explain your idea" : "";
    },
  },
});

export const {
  setValues,
  setScenarioArr,
  setPeriods,
  setVals,
  switchForecastBy,
  switchFcstShares,
  switchFcstMulti,
  switchFcstEbmg,
  switchFcstDbtEb,
  switchSelectedIdea,
  switchChart,
  switchView,
  switchSensDisplay,
  switchValuation,
  switchValMultiple,
  setScenarioArray,
  typeCAGR,
  switchSteps,
  typeWACC,
  typeTG,
  typeTitle,
  typeContent,
  typeCOE,
  setbackSteps,
  switchIvpsDisplay,
  switchLcDisplay,
  setIsSubmitting,
  unsetIsSubmitting,
  setErrorsInput,
  setErrorsDCF,
  setErrorShares,
  setErrorMulti,
  setErrorCOE,
  setErrorEbmg,
  setErrorDbtEb,
  setErrorsTC,
} = newIdeaSlice.actions;
export default newIdeaSlice.reducer;
