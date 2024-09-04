import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    loading: false,
    error: null,
  },
  reducers: {
    setCampers: (state, action) => {
      console.log("Set campers ", action.payload);
      state.campers = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.loading = false;

        state.campers = action.payload.items;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCampers } = campersSlice.actions;

export default campersSlice.reducer;
