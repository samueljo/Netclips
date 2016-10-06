import {
  requestSeries,
  receiveSeries,
  receiveSerie,
  REQUEST_SERIES,
  REQUEST_SERIE } from '../actions/serie_actions';

import {
  fetchSeries,
  fetchSerie } from '../util/series_api_util';

// import { UPDATE_FILTER } from '../actions/filter_actions';

export default ({ getState, dispatch }) => next => action => {
  const seriesSuccess = data => dispatch(receiveSeries(data));
  const serieSuccess = data => dispatch(receiveSerie(data));

  switch(action.type) {
    case REQUEST_SERIES:
      fetchSeries(seriesSuccess);
      break;
    case REQUEST_SERIE:
      fetchSerie(action.id, serieSuccess);
      break;
    default:
      break;
  }
  return next(action);
};
