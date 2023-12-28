import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadDefault, loadIdeas } from "../../../pages/services/apiFinancials";
import { setScenarioObj } from "./helpers/newIdeaMisc";

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
  itemsDCF: {},
  itemsMulti: {},
  clickedIdea: null,
  newIdeaFormActive: false,
  showCommentBar: false,
  comment: "",
  reply: "",
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
    commentBarDisplay(state) {
      state.showCommentBar = !state.showCommentBar;
    },
    typeComment(state, action) {
      state.comment = action.payload;
    },
    typeReply(state, action) {
      state.reply = action.payload;
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
    setItemsDCF(state, action) {
      state.itemsDCF = {
        wacc: action.payload.wacc,
        tg: action.payload.tg,
        cash: action.payload.cash,
        debt: action.payload.debt,
        fas: action.payload.fas,
        nci: action.payload.nci,
      };
    },
    setItemsMulti(state, action) {
      state.itemsMulti = {
        coe: action.payload.coe,
      };
    },

    setIdeaObj(state, action) {
      state.ideaInProgress = {
        user: action.payload.user,
        id: action.payload.id,
        likes: [],
        comments: [],
        ticker: action.payload.ticker,
        valuation: action.payload.val.toUpperCase(),
        title: action.payload.title,
        content: action.payload.content,
        datetime: action.payload.date,
        historical: action.payload.historical,
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
  commentBarDisplay,
  typeComment,
  typeReply,
  showNewIdeaForm,
  hideNewIdeaForm,
  setRemodify,
  setOptimistic,
  setRealistic,
  setPessimistic,
  setIdeaObj,
  setItemsDCF,
  setItemsMulti,
  emptyIdeaObj,
} = ideaSlice.actions;

export default ideaSlice.reducer;
