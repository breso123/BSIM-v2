import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadDefault, loadIdeas } from "../../../pages/services/apiFinancials";

export const fetchIdeas = createAsyncThunk(
  "ideas/fetchIdeas",
  async function () {
    const logoData = await loadDefault("logo");
    const ideas = await loadIdeas(logoData.meta.symbol);

    return ideas;
  }
);

const initialState = {
  status: "idle",
  error: "",
  ideas: [],
  scenario: "optimistic",
  optimistic: [],
  realistic: [],
  pessimistic: [],
  ideaInProgress: {},
  clickedIdea: null,
  newIdeaFormActive: false,
};

const dcfSummation = (arr) =>
  arr.map((el) => el.discounted).reduce((el, arr) => el + arr, 0);

const setScenarioObj = (sc, state, action) => {
  console.log(state[sc]);
  return {
    dcfSum: dcfSummation(state[sc]),
    cagr:
      Math.pow(
        state[sc][state[sc].length - 2].value / action.payload.latest,
        1 / 9
      ) - 1,
    ivps:
      (dcfSummation(state[sc]) + action.payload.sum) / action.payload.shares,
    values: state[sc],
  };
};

const ideaSlice = createSlice({
  name: "ideas",
  initialState,
  reducers: {
    switchScenario(state, action) {
      state.scenario = action.payload;
    },
    setOptFinal(state, action) {
      state[action.payload.type] = action.payload.arr;
    },
    setClickedIdea(state, action) {
      state.clickedIdea = action.payload;
    },
    showNewIdeaForm(state) {
      state.newIdeaFormActive = true;
    },
    hideNewIdeaForm(state) {
      state.newIdeaFormActive = false;
    },
    setOptimistic(state, action) {
      state.optimistic = action.payload;
    },
    setRealistic(state, action) {
      state.realistic = action.payload;
    },
    setPessimistic(state, action) {
      state.pessimistic = action.payload;
    },
    setIdeaObj(state, action) {
      state.ideaInProgress = {
        user: action.payload.user,
        id: action.payload.id,
        ticker: action.payload.ticker,
        valuation: action.payload.val.toUpperCase(),
        title: action.payload.title,
        content: action.payload.content,
        datetime: action.payload.date,
        wacc: action.payload.wacc,
        tg: action.payload.tg,
        historical: action.payload.historical,
        cash: action.payload.cash,
        debt: action.payload.debt,
        fas: action.payload.fas,
        nci: action.payload.nci,
        shares: action.payload.shares,
        cp: action.payload.cp,
        optimistic: setScenarioObj("optimistic", state, action),
        realistic: setScenarioObj("realistic", state, action),
        pessimistic: setScenarioObj("pessimistic", state, action),
      };
    },
    emptyIdeaObj(state) {
      state.ideaInProgress = {};
      state.newIdeaFormActive = false;
      state.optimistic = [];
      state.realistic = [];
      state.pessimistic = [];
    },
    step3(state, action) {
      state.ideaInProgress = { ...state.ideaInProgress, title: action.payload };
    },
    finalStep(state, action) {
      state.ideaInProgress = {
        ...state.ideaInProgress,
        content: action.payload.content,
        datetime: action.payload.date,
        user: "breso123",
      };
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchIdeas.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIdeas.fulfilled, (state, action) => {
        state.ideas = action.payload;
        state.status = "idle";
      })
      .addCase(fetchIdeas.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const {
  switchScenario,
  setOptFinal,
  setClickedIdea,
  showNewIdeaForm,
  hideNewIdeaForm,
  setRemodify,
  setOptimistic,
  setRealistic,
  setPessimistic,
  setIdeaObj,
  emptyIdeaObj,
  step3,
  finalStep,
} = ideaSlice.actions;

export default ideaSlice.reducer;
