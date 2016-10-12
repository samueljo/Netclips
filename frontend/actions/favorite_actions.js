export const RECEIVE_FAVORITE_SERIES = "RECEIVE_FAVORITE_SERIES";
export const REMOVE_FAVORITE_SERIE = "REMOVE_FAVORITE_SERIE";
export const ADD_FAVORITE_SERIE = "ADD_FAVORITE_SERIE";

export const receiveFavoriteSeries = (series) => ({
  type: RECEIVE_FAVORITE_SERIES,
  series
});

export const addFavoriteSerie = (serie) => ({
  type: ADD_FAVORITE_SERIE,
  serie
});

export const removeFavoriteSerie = (serie) => ({
  type: REMOVE_FAVORITE_SERIE,
  serie
});
