import { CampersState, Filters } from "../types/types";
import { RootState } from "./store";

export const selectCampers = (state: RootState): CampersState => state.campers;

export const selectFilters = (state: RootState): Filters =>
  state.filters.filters;

export const selectLoading = (state: RootState): boolean =>
  state.campers.loading;
