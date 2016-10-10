import {
  receiveSeries,
  receiveSerie,
  REQUEST_SERIES,
  REQUEST_SERIE,
  CREATE_REVIEW } from '../actions/serie_actions';

import {
  fetchSeries,
  fetchSerie,
  fetchReview } from '../util/series_api_util';

// import { UPDATE_FILTER } from '../actions/filter_actions';

export default ({ getState, dispatch }) => next => action => {
  const seriesSuccess = data => dispatch(receiveSeries(data));
  const serieSuccess = data => dispatch(receiveSerie(data, action.genreId));
  switch(action.type) {
    case REQUEST_SERIES:
      fetchSeries(seriesSuccess);
      break;
    case REQUEST_SERIE:
      fetchSerie(action.id, serieSuccess);
      break;
    case CREATE_REVIEW:
      fetchReview(action.review, serieSuccess);
      break;
    default:
      break;
  }
  return next(action);
};
