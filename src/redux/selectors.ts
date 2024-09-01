import { RootState } from "./store";

export const selectCampers = (state: RootState) => state.campers.items;
export const selectLoading = (state: RootState) => state.campers.loading;
export const selectFilters = (state: RootState) => state.campers.filters;
export const selectFavorites = (state: RootState) => state.campers.favorites;
export const selectError = (state: RootState) => state.campers.error;
export const selectCurrentPage = (state: RootState) =>
  state.campers.currentPage;
export const selectItemsPerPage = (state: RootState) =>
  state.campers.itemsPerPage;
