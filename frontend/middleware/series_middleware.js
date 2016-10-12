import {
  requestSerie,
  receiveSeries,
  receiveSerie,
  REQUEST_SERIES,
  REQUEST_SERIE } from '../actions/serie_actions';

import {
  CREATE_REVIEW,
  UPDATE_REVIEW,
  DESTROY_REVIEW } from '../actions/review_actions';

import {
  ADD_FAVORITE_SERIE,
  REMOVE_FAVORITE_SERIE } from '../actions/favorite_actions';

import {
  fetchSeries,
  fetchSerie } from '../util/series_api_util';

import {
  createReview,
  updateReview,
  destroyReview } from '../util/reviews_api_util';

import {
  createFavorite,
  destroyFavorite } from '../util/favorites_api_util';

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
      createReview(action.review, serieSuccess);
      break;
    case UPDATE_REVIEW:
      updateReview(action.review, serieSuccess);
      break;
    case DESTROY_REVIEW:
      destroyReview(action.review, serieSuccess);
      break;
    case ADD_FAVORITE_SERIE:
      createFavorite(action.serie, seriesSuccess);
      break;
    case REMOVE_FAVORITE_SERIE:
      destroyFavorite(action.serie, seriesSuccess);
      break;
    default:
      break;
  }
  return next(action);
};
