import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadDefault } from "../../../pages/services/apiFinancials";

export const fetchStatistics = createAsyncThunk(
  "statistics/fetchStatistics",
  async function () {
    const statData = await loadDefault("statistics");
    const logoData = await loadDefault("logo");

    const statisticsModified = {
      price_and_volume: {
        ...statData.stock_price_summary,
        ...statData.stock_statistics,
      },
      valuation: statData.valuations_metrics,
      dividends: statData.dividends_and_splits,
      eps: statData.financials.income_statement.diluted_eps_ttm,
    };

    const pld = { ...statisticsModified, logo: logoData };

    return pld;
  }
);

const initialState = {
  status: "idle",
  error: "",
  cfItem: "ocfl",
  statistics: {},
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    switchCfItem(state, action) {
      state.cfItem = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchStatistics.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.statistics = action.payload;
        state.status = "idle";
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const { switchCfItem } = statisticsSlice.actions;

export default statisticsSlice.reducer;
