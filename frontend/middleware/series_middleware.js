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
  CREATE_OR_UPDATE_CURRENT_WATCHING,
  DESTROY_CURRENT_WATCHING } from '../actions/current_watching_actions';

import {
  fetchSeries,
  fetchSerie } from '../util/series_api_util';

import {
  createReview,
  updateReview,
  destroyReview } from '../util/reviews_api_util';

import {
  fetchFavorites,
  createFavorite,
  destroyFavorite } from '../util/favorites_api_util';

import {
  createOrUpdateCurrentWatching,
  destroyCurrentWatching } from '../util/current_watchings_api_util';

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
    case CREATE_OR_UPDATE_CURRENT_WATCHING:
      createOrUpdateCurrentWatching(action.currentWatching, seriesSuccess);
      break;
    case DESTROY_CURRENT_WATCHING:
      destroyCurrentWatching(action.serieId, seriesSuccess);
      break;
    default:
      break;
  }
  return next(action);
};
