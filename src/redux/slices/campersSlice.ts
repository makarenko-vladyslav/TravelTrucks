import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Camper, CampersState, Filters } from "../../types";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk<Camper[], Filters>(
  "campers/fetchCampers",
  async (filters) => {
    const { data } = await axios.get(API_URL, { params: filters });
    return data;
  }
);

export const fetchCamperById = createAsyncThunk<Camper, string>(
  "campers/fetchCamperById",
  async (id) => {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
  }
);

const initialState: CampersState = {
  items: [],
  selectedCamper: null,
  status: "idle",
  filters: {
    location: "",
    bodyType: "",
    hasAC: false,
    hasKitchen: false,
    hasTV: false,
    hasRefrigerator: false,
    hasMicrowave: false,
    hasGas: false,
    hasWater: false,
    hasBathroom: false,
    transmission: "",
    engine: "",
  },
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
      });
  },
});

export const { setFilters, toggleFavorite } = campersSlice.actions;

export default campersSlice.reducer;
