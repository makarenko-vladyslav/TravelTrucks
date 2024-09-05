import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    totalCampers: 0,
    campers: [],
    favoriteCampers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.campers = [...state.campers, ...action.payload.items];
        state.totalCampers = action.payload.total;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default campersSlice.reducer;
