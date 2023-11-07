import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as ab from "../miscellanious/appButtons";
import { loadDefault } from "../pages/services/apiFinancials";
import { itemUnstringed } from "../helpers/formatters";

export const fetchLogo = createAsyncThunk("app/loadLogo", async function () {
  const logo = await loadDefault("logo");
  return logo.url;
});

const initialState = {
  status: "loading",
  error: "",
  featureKey: "general",
  selected: "general",
  contentKey: "stock_chart",
  price: 176.7,
  appBtns: ab["general"],
  logo: "",
  image: "https://static.thenounproject.com/png/1035311-200.png",
  featureIndex: 0,
  shouldRefetch: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    switchFeatureKey(state, action) {
      state.featureKey = action.payload;
      state.contentKey = ab[action.payload][0][0];
      state.appBtns = ab[action.payload];
      state.image = ab[action.payload][0][1];
    },

    switchContentKey(state, action) {
      state.contentKey = ab[state.featureKey][action.payload.index][0];
      state.featureIndex = action.payload.index;
      state.image = ab[state.featureKey][action.payload.index][1];
    },
    urlRefreshed(state, action) {
      const abIndex = ab[action.payload.fk].findIndex(
        (ab) => ab[0] === itemUnstringed(action.payload.ck)
      );
      state.featureKey = action.payload.fk;
      state.appBtns = ab[action.payload.fk];
      state.featureIndex = abIndex;
      state.contentKey = action.payload.ck;
      state.image = ab[action.payload.fk][abIndex][1];
    },
    refetchItems(state) {
      state.shouldRefetch = true;
    },
    itemsFetched(state) {
      state.shouldRefetch = false;
    },
    switchSelectedFeature(state, action) {
      state.selected = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchLogo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLogo.fulfilled, (state, action) => {
        state.logo = action.payload;
        state.status = "idle";
      })
      .addCase(fetchLogo.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const {
  switchFeatureKey,
  switchContentKey,
  itemsFetched,
  refetchItems,
  urlRefreshed,
  switchSelectedFeature,
} = appSlice.actions;

export default appSlice.reducer;
