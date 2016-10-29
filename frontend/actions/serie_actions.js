export const RECEIVE_SERIES = "RECEIVE_SERIES";
export const REQUEST_SERIES = "REQUEST_SERIES";
export const RECEIVE_SERIE = "RECEIVE_SERIE";
export const RECEIVE_LIST_ITEM = "RECEIVE_LIST_ITEM";
export const REQUEST_SERIE = "REQUEST_SERIE";
export const REMOVE_SERIE = "REMOVE_SERIE";
export const GRAB_SERIE = "GRAB_SERIE";
export const CACHED_SERIES = "CACHED_SERIES";

export const requestSeries = () => ({
  type: REQUEST_SERIES
});

export const receiveSeries = (series) => ({
  type: RECEIVE_SERIES,
  series
});

export const requestSerie = (id, genreId) => ({
  type: REQUEST_SERIE,
  id,
  genreId
});

export const grabSerie = (id, genreId) => ({
  type: GRAB_SERIE,
  id,
  genreId
});

export const receiveSerie = (serie, genreId, cache) => ({
  type: RECEIVE_SERIE,
  serie,
  genreId,
  cache
});

export const cachedSeries = (serie, genreId) => ({
  type: CACHED_SERIES,
  serie,
  genreId
});

export const removeSerie = () => ({
  type: REMOVE_SERIE
});
