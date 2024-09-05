import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    page: 1,
    limit: 4,
    filters: {},
    favorites: false,
  },
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setFavorites, setPage } = filtersSlice.actions;

export default filtersSlice.reducer;
