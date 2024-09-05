import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async ({ page, limit, filters } = {}, thunkAPI) => {
    try {
      const response = await axios.get("/", {
        params: {
          page,
          limit,
          ...filters,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  "campers/getCamperById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
