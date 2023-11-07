import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadDefault } from "../../../pages/services/apiFinancials";

export const fetchMovingAverages = createAsyncThunk(
  "technicals/fetchMovingAverages",
  async function () {
    const data = await loadDefault("movingAvgs");
    return data;
  }
);

export const fetchOscillators = createAsyncThunk(
  "technicals/fetchOscillators",
  async function () {
    const data = await loadDefault("oscillators");
    return data;
  }
);

const initialState = {
  status: "idle",
  error: "",
  movingAvgs: {},
  oscillators: {},
  timeFrame: "1min",
};

const technicalsSlice = createSlice({
  name: "technicals",
  initialState,
  reducers: {
    switchTimeFrame(state, action) {
      state.timeFrame = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchMovingAverages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovingAverages.fulfilled, (state, action) => {
        state.movingAvgs = action.payload;
        state.status = "idle";
      })
      .addCase(fetchMovingAverages.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(fetchOscillators.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOscillators.fulfilled, (state, action) => {
        state.oscillators = action.payload;
        state.status = "idle";
      })
      .addCase(fetchOscillators.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const { switchTimeFrame } = technicalsSlice.actions;

export default technicalsSlice.reducer;
