import { createSlice } from "@reduxjs/toolkit";
import { Camper, Filters } from "../types";
import { fetchCampers } from "../utils/api";

interface CampersState {
  items: Camper[];
  selectedCamper: Camper | null;
  loading: boolean;
  filters: Filters;
  favorites: string[];
  error: string | null;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: CampersState = {
  items: [],
  selectedCamper: null,
  loading: false,
  filters: {},
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
  error: null,
  currentPage: 1,
  itemsPerPage: 4,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      const isFavorite = state.favorites.includes(camperId);
      if (isFavorite) {
        state.favorites = state.favorites.filter((id) => id !== camperId);
      } else {
        state.favorites.push(camperId);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    loadMore: (state) => {
      state.currentPage += 1;
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
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setFilters, toggleFavorite, loadMore } = campersSlice.actions;

export default campersSlice.reducer;
