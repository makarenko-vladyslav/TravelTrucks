import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Camper, CampersResponse, Filters, CampersState } from "../types/types";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk<
  CampersResponse,
  void,
  { state: { campers: CampersState; filters: { filters: Filters } } }
>("campers/fetchCampers", async (_, thunkAPI) => {
  const { campers, filters } = thunkAPI.getState();

  const { page, limit } = campers;

  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    ...filters.filters,
  });

  try {
    const response = await axios.get<CampersResponse>(`/campers?${params}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response && axiosError.response.status === 404) {
      return thunkAPI.rejectWithValue(
        "Sorry, we don't have any campers that match your search criteria. Please try again with different filters."
      );
    } else {
      return thunkAPI.rejectWithValue(axiosError.message);
    }
  }
});

export const fetchCamperById = createAsyncThunk<
  Camper,
  string,
  { rejectValue: string }
>(`campers/fetchCamperById`, async (id, thunkAPI) => {
  try {
    const response = await axios.get<Camper>(`/campers/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return thunkAPI.rejectWithValue(axiosError.message);
  }
});
