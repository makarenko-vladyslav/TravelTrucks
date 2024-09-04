type FilterValue = string | number | boolean;
type Filters = Record<string, FilterValue>;

export const cleanFilters = (filters: Filters): Filters => {
  const cleanedFilters: Filters = {};

  for (const [key, value] of Object.entries(filters)) {
    if (value !== "" && value !== false) {
      cleanedFilters[key] = value;
    }
  }

  return cleanedFilters;
};
