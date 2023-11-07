import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadDefault } from "../../../pages/services/apiFinancials";

export const fetchEstimates = createAsyncThunk(
  "analysis/fetchEstimates",
  async function () {
    const epsEst = await loadDefault("earningsEst");
    const revEst = await loadDefault("revenueEst");
    const trends = await loadDefault("epsTrend");
    const revs = await loadDefault("epsRev");
    const growth = await loadDefault("growthEst");

    const pld = { epsEst, revEst, growth, trends, revs };

    return pld;
  }
);

export const fetchRecoms = createAsyncThunk(
  "analysis/fetchRecoms",
  async function () {
    const recoms = await loadDefault("recommendations");

    return recoms;
  }
);

export const fetchRatings = createAsyncThunk(
  "analysis/fetchRatings",
  async function () {
    const ratings = await loadDefault("analystRatings");

    return ratings;
  }
);

const initialState = {
  status: "idle",
  error: "",
  estimates: {},
  recoms: {},
  ratings: {},
};

const analysisSlice = createSlice({
  name: "analysis",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(fetchEstimates.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEstimates.fulfilled, (state, action) => {
        state.estimates = action.payload;
        state.status = "idle";
      })
      .addCase(fetchEstimates.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(fetchRecoms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecoms.fulfilled, (state, action) => {
        state.recoms = action.payload;
        state.status = "idle";
      })
      .addCase(fetchRecoms.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(fetchRatings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRatings.fulfilled, (state, action) => {
        state.ratings = action.payload;
        state.status = "idle";
      })
      .addCase(fetchRatings.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

//export const { switchAnalysisItems, leaveFeatureAnly } = analysisSlice.actions;

export default analysisSlice.reducer;
