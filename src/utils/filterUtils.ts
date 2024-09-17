import { Filters } from "../types/types";

// Функція для отримання фільтрів з URL
export const getFiltersFromUrl = (): Filters => {
  const params = new URLSearchParams(window.location.search);
  const filters: Filters = {};

  params.forEach((value, key) => {
    filters[key as keyof Filters] = value;
  });

  return filters;
};

// Функція для очищення фільтрів з URL-параметрів
export const clearUrlFilters = () => {
  const newUrl = `${window.location.pathname}`;
  window.history.replaceState(null, "", newUrl);
};

// Функція для оновлення URL фільтрами
export const updateUrlWithFilters = (filters: Filters) => {
  const params = new URLSearchParams();

  Object.keys(filters).forEach((key) => {
    const value = filters[key as keyof Filters];
    if (value) {
      params.set(key, String(value));
    }
  });

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState(null, "", newUrl);
};

// Функція для отримання початкових значень форми з фільтрів
export const getInitialValues = (filters: Filters) => ({
  location: String(filters.location || ""),
  form: String(filters.form || ""),
  transmission: String(filters.transmission || ""),
  engine: String(filters.engine || ""),
  AC: !!filters.AC,
  bathroom: !!filters.bathroom,
  kitchen: !!filters.kitchen,
  TV: !!filters.TV,
  radio: !!filters.radio,
  refrigerator: !!filters.refrigerator,
  microwave: !!filters.microwave,
  gas: !!filters.gas,
  water: !!filters.water,
});
