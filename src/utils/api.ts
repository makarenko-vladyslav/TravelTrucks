import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Camper, Filters } from "../types";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk<
  Camper[],
  Filters & { page: number; limit: number }
>(
  "campers/fetchCampers",
  async ({ page, limit, ...filters }, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, {
        params: { ...filters, page, limit },
      });
      return response.data.items;
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);
