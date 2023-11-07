import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadDefault } from "../../../pages/services/apiFinancials";

export const fetchExecutives = createAsyncThunk(
  "insiders/fetchExecutives",
  async function () {
    const executives = await loadDefault("executives");
    return executives;
  }
);

export const fetchTransactions = createAsyncThunk(
  "insiders/fetchTransactions",
  async function () {
    const transactions = await loadDefault("transactions");
    return transactions;
  }
);

const initialState = {
  status: "idle",
  error: "",
  executives: [],
  transactions: [],
  transactionsF: [],
  executiveSummation: "all",
  filterPos: "Chief Executive Officer",
  filterShares: "less-than-20000",
  filterPeriod: "last-30-days",
  areTransactionsFiltered: false,
};

const insidersSlice = createSlice({
  name: "insiders",
  initialState,
  reducers: {
    switchFilterPos(state, action) {
      state.filterPos = action.payload;
    },
    switchFilterShares(state, action) {
      state.filterShares = action.payload;
    },
    switchFilterPeriod(state, action) {
      state.filterPeriod = action.payload;
    },
    setSubmittedTransactions(state, action) {
      state.transactionsF = action.payload;
      state.areTransactionsFiltered = true;
    },
    showAll(state) {
      state.areTransactionsFiltered = false;
    },
    switchPeriodRangeTable(state, action) {
      state.executiveSummation = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchExecutives.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExecutives.fulfilled, (state, action) => {
        state.executives = action.payload;
        state.status = "idle";
      })
      .addCase(fetchExecutives.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(fetchTransactions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.status = "idle";
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const {
  switchFilterPeriod,
  switchFilterPos,
  switchFilterShares,
  setSubmittedTransactions,
  showAll,
  switchPeriodRangeTable,
} = insidersSlice.actions;

export default insidersSlice.reducer;
