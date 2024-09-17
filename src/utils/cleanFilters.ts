import { Filters } from "../types/types";

export const cleanFilters = (filters: Filters): Filters => {
  const cleanedFilters: Filters = {};

  for (const [key, value] of Object.entries(filters)) {
    if (value !== "" && value !== false) {
      cleanedFilters[key] = value;
    }
  }

  return cleanedFilters;
};
