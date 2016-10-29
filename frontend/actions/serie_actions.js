export const RECEIVE_SERIES = "RECEIVE_SERIES";
export const REQUEST_SERIES = "REQUEST_SERIES";
export const RECEIVE_SERIE = "RECEIVE_SERIE";
export const RECEIVE_LIST_ITEM = "RECEIVE_LIST_ITEM";
export const REQUEST_SERIE = "REQUEST_SERIE";
export const REMOVE_SERIE = "REMOVE_SERIE";
export const CACHED_SERIES = "CACHED_SERIES";
export const CACHED_SERIE = "CACHED_SERIE";

export const requestSeries = () => ({
  type: REQUEST_SERIES
});

export const requestSerie = (id, genreId) => ({
  type: REQUEST_SERIE,
  id,
  genreId
});

export const receiveSeries = (series) => ({
  type: RECEIVE_SERIES,
  series
});

export const receiveSerie = (serie, genreId) => ({
  type: RECEIVE_SERIE,
  serie,
  genreId
});

export const removeSerie = () => ({
  type: REMOVE_SERIE
});


// export const receiveEpisodes = (serieId, episodes, cache) => ({
//   type: RECEIVE_EPISODES,
//   serieId,
//   episodes,
//   cache
// });
//
// export const cachedEpisodes = (episodes) => ({
//   type: CACHED_EPISODES,
//   episodes
// });
