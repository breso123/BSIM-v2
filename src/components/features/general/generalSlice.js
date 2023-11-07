import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadDefault, loadStock } from "../../../pages/services/apiFinancials";

export const fetchGeneral = createAsyncThunk(
  "general/fetchGeneral",
  async function () {
    const generalData = await loadDefault("general");
    const logoData = await loadDefault("logo");
    const general = { ...generalData, logo: logoData.url };
    return general;
  }
);

export const fetchEarnings = createAsyncThunk(
  "general/fetchEarnings",
  async function () {
    const earningsData = await loadDefault("earnings");
    return earningsData;
  }
);

export const fetchStock = createAsyncThunk(
  "general/fetchStock",
  async function (_, { getState }) {
    const { interval, outputSize } = getState().general;
    const stockData = await loadStock(interval, outputSize);
    return stockData;
  }
);

export const fetchStockFull = createAsyncThunk(
  "general/fetchStockFull",
  async function () {
    const stockDataFull = await loadStock("1month", 5000);
    return stockDataFull;
  }
);

const initialState = {
  status: "idle",
  error: "",
  general: {},
  stock: {},
  stockMax: {},
  earnings: [],
  stockChart: "area",
  interval: "1min",
  outputSize: "90",
  monthlyReturn: null,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    switchChartType(state, action) {
      state.stockChart = action.payload;
    },
    showMonthlyReturnData(state, action) {
      state.monthlyReturn = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchGeneral.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGeneral.fulfilled, (state, action) => {
        state.general = action.payload;
        state.status = "idle";
      })
      .addCase(fetchGeneral.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(fetchEarnings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEarnings.fulfilled, (state, action) => {
        state.earnings = action.payload;
        state.status = "idle";
      })
      .addCase(fetchEarnings.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(fetchStock.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStock.fulfilled, (state, action) => {
        state.stock = action.payload;
        state.status = "idle";
      })
      .addCase(fetchStock.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(fetchStockFull.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStockFull.fulfilled, (state, action) => {
        state.stockMax = action.payload;
        state.status = "idle";
      })
      .addCase(fetchStockFull.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const { switchChartType, showMonthlyReturnData } = generalSlice.actions;

export default generalSlice.reducer;
