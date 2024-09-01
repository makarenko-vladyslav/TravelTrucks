export const getFavoritesFromLocalStorage = (): string[] => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

export const saveFavoritesToLocalStorage = (favorites: string[]): void => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
