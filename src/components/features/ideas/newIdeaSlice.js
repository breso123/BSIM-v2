import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  optimistic_0: "",
  optimistic_1: "",
  optimistic_2: "",
  optimistic_3: "",
  optimistic_4: "",
  optimistic_5: "",
  optimistic_6: "",
  optimistic_7: "",
  optimistic_8: "",
  realistic_0: "",
  realistic_1: "",
  realistic_2: "",
  realistic_3: "",
  realistic_4: "",
  realistic_5: "",
  realistic_6: "",
  realistic_7: "",
  realistic_8: "",
  pessimistic_0: "",
  pessimistic_1: "",
  pessimistic_2: "",
  pessimistic_3: "",
  pessimistic_4: "",
  pessimistic_5: "",
  pessimistic_6: "",
  pessimistic_7: "",
  pessimistic_8: "",
  errors: {},
  selectedStep: 1,
  optimistic: [],
  realistic: [],
  pessimistic: [],
  vals: [],
  selectedIdea: "optimistic",
  forecastBy: "cagr",
  valuation: "dcf",
  ivpsDisplay: "Diff",
  lcDisplay: "Setup",
  chartDisplay: "Bar",
  viewDisplay: "Cards",
  optimisticCAGR: "",
  realisticCAGR: "",
  pessimisticCAGR: "",
  wacc: "",
  tg: "",
  title: "",
  content: "",
  isSubmitting: false,
};

const getInputError = (state) => {
  if (state.forecastBy === "cagr")
    return [
      state.optimisticCAGR,
      state.pessimisticCAGR,
      state.realisticCAGR,
    ].some((cagr) => cagr === "")
      ? "All scenario inputs must be filled"
      : "";
  else
    return Object.entries(state)
      .filter(
        (s) =>
          s[0].includes("realistic_") ||
          s[0].includes("optimistic_") ||
          s[0].includes("pessimistic_")
      )
      .some((s) => s[1] === "")
      ? "All inputs must be filled"
      : "";
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
    switchSelectedIdea(state, action) {
      state.selectedIdea = action.payload;
    },
    switchChart(state, action) {
      state.chartDisplay = action.payload;
    },
    switchView(state, action) {
      state.viewDisplay = action.payload;
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
    setErrors(state) {
      state.errors.wacc = state.wacc === "" ? "Please enter W.A.C.C." : "";
      state.errors.tg = state.tg === "" ? "Please enter T-growth" : "";
      state.errors.cagr = getInputError(state);
      state.errors.title = state.title === "" ? "Please name your idea" : "";
      state.errors.content =
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
  switchSelectedIdea,
  switchChart,
  switchView,
  setScenarioArray,
  typeCAGR,
  switchSteps,
  typeWACC,
  typeTG,
  typeTitle,
  typeContent,
  setbackSteps,
  switchIvpsDisplay,
  switchLcDisplay,
  setIsSubmitting,
  unsetIsSubmitting,
  setErrors,
} = newIdeaSlice.actions;
export default newIdeaSlice.reducer;
