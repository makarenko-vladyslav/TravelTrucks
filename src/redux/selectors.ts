import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.campers;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;

export const selectLimit = (state) => state.filters.limit;
export const selectPage = (state) => state.filters.page;
export const selectFilters = (state) => state.filters;


// export const selectFavoritesOnly = (state) => state.filters.favoritesOnly;

// export const selectFilteredCampers = createSelector(
//   [selectCampers, selectFilters],
//   (campers, filters) => {
//     console.log("Calculating visible campers");
//   }
// );

// export const selectFavoriteCampers = createSelector(
//   [selectCampers, selectFavoritesOnly],
//   (campers, favoritesOnly) => {
//     if (favoritesOnly) {
//       return campers.filter((camper) => camper.favorite);
//     } else {
//       return campers;
//     }
//   }
// );
