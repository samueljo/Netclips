export const REMOVE_FAVORITE_SERIE = "REMOVE_FAVORITE_SERIE";
export const ADD_FAVORITE_SERIE = "ADD_FAVORITE_SERIE";

export const addFavoriteSerie = (serie) => ({
  type: ADD_FAVORITE_SERIE,
  serie
});

export const removeFavoriteSerie = (serie) => ({
  type: REMOVE_FAVORITE_SERIE,
  serie
});
