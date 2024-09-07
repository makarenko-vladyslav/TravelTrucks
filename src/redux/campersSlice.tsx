import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    favorites: [],
    currentItem: null,
    loading: false,
    error: null,
    page: 1,
    limit: 4,
    totalCampers: 0,
    hasNextPage: false,
  },

  reducers: {
    nextPage(state) {
      state.page += 1;
    },
    clearCampers(state) {
      state.campers = [];
      state.page = 1;
    },
    toggleFavorite(state, action) {
      const camperId = action.payload;

      const isFavorite = state.favorites.some((item) => item.id === camperId);

      if (!isFavorite) {
        state.favorites.push({ id: camperId, isFavorite: true });
      } else {
        state.favorites = state.favorites.filter(
          (item) => item.id !== camperId
        );
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        const existingIds = new Set(state.campers.map((item) => item.id));

        state.campers = [
          ...state.campers,
          ...action.payload.items.filter(
            (newItem) => !existingIds.has(newItem.id)
          ),
        ];

        state.totalCampers = action.payload.total;
        state.hasNextPage = state.campers.length < state.totalCampers;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.currentItem = action.payload;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;

export const { nextPage, toggleFavorite, clearCampers } = campersSlice.actions;
