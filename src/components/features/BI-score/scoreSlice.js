import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "loading",
  error: "",
  timeType: "oneYear",
  timeFrame: "Y1",
  index: 0,
  clickedScore: null,
  ts: "",
};

const scoreSlice = createSlice({
  name: "scorebi",
  initialState,
  reducers: {
    switchTimeType(state, action) {
      state.timeType = action.payload;
    },
    switchTimeFrame(state, action) {
      state.timeFrame = action.payload;
    },
    switchIndex(state, action) {
      state.index = state.timeType === "oneYear" ? action.payload : 0;
    },
    switchClickedScore(state, action) {
      state.clickedScore = action.payload;
    },
    switchTs(state, action) {
      state.ts = action.payload;
    },
    removeClickedScore(state) {
      state.clickedScore = null;
    },
  },
});

export const {
  switchTimeType,
  switchTimeFrame,
  switchIndex,
  switchClickedScore,
  switchTs,
  removeClickedScore,
} = scoreSlice.actions;

export default scoreSlice.reducer;
