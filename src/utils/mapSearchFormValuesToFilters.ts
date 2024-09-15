import { Filters, SearchFormValues } from "../types/types";

export const mapSearchFormValuesToFilters = (
  values: SearchFormValues
): Filters => {
  const filters: Filters = {};

  Object.entries(values).forEach(([key, value]) => {
    if (value !== "" && value !== false) {
      filters[key] = value;
    }
  });

  return filters;
};
