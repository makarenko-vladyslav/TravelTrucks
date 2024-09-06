import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    const { campers, filters } = thunkAPI.getState();

    const { page, limit } = campers;

    const params = new URLSearchParams({
      page,
      limit,
      ...filters.filterParams,
    });

    try {
      const response = await axios.get(`/campers?${params}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return thunkAPI.rejectWithValue(
          "Sorry, there are no campers that match your search criteria"
        );
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  `campers/fetchCamperById`,
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
