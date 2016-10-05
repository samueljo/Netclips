export const RECEIVE_SERIES = "RECEIVE_SERIES";
export const REQUEST_SERIES = "REQUEST_SERIES";
export const RECEIVE_SERIE = "RECEIVE_SERIE";
export const REQUEST_SERIE = "REQUEST_SERIE";

export const requestSeries = () => ({
  type: REQUEST_SERIES
});

export const requestSerie = (id) => ({
  type: REQUEST_SERIE,
  id
});

export const receiveSeries = (series) => ({
  type: RECEIVE_SERIES,
  series
});

export const receiveSerie = (serie) => ({
  type: RECEIVE_SERIE,
  serie
});
