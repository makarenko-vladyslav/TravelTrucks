import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations";
import { CampersState } from "../types/types";

const handleRejectedFetchCampers = (
  state: CampersState,
  action: ReturnType<typeof fetchCampers.rejected>
) => {
  state.loading = false;
  state.error =
    typeof action.payload === "string"
      ? action.payload
      : action.error.message || null;
};

const handleRejectedFetchCamperById = (
  state: CampersState,
  action: ReturnType<typeof fetchCamperById.rejected>
) => {
  state.loading = false;
  state.error =
    typeof action.payload === "string"
      ? action.payload
      : action.error.message || null;

  state.currentItem = null;
};

const initialState: CampersState = {
  campers: [],
  favorites: [],
  currentItem: null,
  loading: false,
  error: null,
  page: 1,
  limit: 4,
  totalCampers: 0,
  hasNextPage: false,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,

  reducers: {
    nextPage(state) {
      state.page += 1;
    },
    clearCampers(state) {
      state.campers = [];
      state.page = 1;
    },
    toggleFavorite(state, action) {
      const { id } = action.payload;
      const isFavorite = state.favorites.some((item) => item.id === id);

      if (!isFavorite) {
        state.favorites.push({ ...action.payload });
      } else {
        state.favorites = state.favorites.filter((item) => item.id !== id);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
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
      .addCase(fetchCampers.rejected, handleRejectedFetchCampers)
      .addCase(fetchCamperById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.currentItem = action.payload;
      })
      .addCase(fetchCamperById.rejected, handleRejectedFetchCamperById);
  },
});

export const campersReducer = campersSlice.reducer;
export const { nextPage, toggleFavorite, clearCampers } = campersSlice.actions;
