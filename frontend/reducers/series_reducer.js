import { LOGOUT } from '../actions/session_actions';

import {
  CACHED_SERIES,
  RECEIVE_SERIES,
  RECEIVE_SERIE,
  RECEIVE_LIST_ITEM,
  REMOVE_SERIE } from '../actions/serie_actions';

import {
  REMOVE_FAVORITE_SERIE,
  ADD_FAVORITE_SERIE } from '../actions/favorite_actions';

import {
  CREATE_CURRENT_WATCHING,
  UPDATE_CURRENT_WATCHING,
  DESTROY_CURRENT_WATCHING } from '../actions/current_watching_actions';

import { deleteItem } from '../reducers/selectors';

import merge from 'lodash/merge';

const _defaultState = {
  seriesIndex: {},
  serieDisplay: null,
  focusedGenreId: null
};

const SeriesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  let temp;
  switch(action.type) {
    case CACHED_SERIES:
      newState = merge({}, state, {focusedGenreId: action.genreId});
      newState.serieDisplay = action.serie;
      return newState;
    case RECEIVE_SERIES:
      return merge({}, state, {seriesIndex: action.series});
    case RECEIVE_SERIE:
      newState = merge({}, state, {focusedGenreId: action.genreId});
      action.cache.insert(action.serie.id, action.serie);
      newState.serieDisplay = action.serie;
      return newState;
    case REMOVE_SERIE:
      return merge({}, state, {serieDisplay: null, focusedGenreId: null});
    case ADD_FAVORITE_SERIE:
      newState = merge({}, state);
      let prevFavorites = newState.seriesIndex['My List'].series;
      let newFavorites = [action.serie, ...prevFavorites];
      newState.seriesIndex['My List'].series = newFavorites;
      return newState;
    case REMOVE_FAVORITE_SERIE:
      newState = merge({}, state);
      prevFavorites = newState.seriesIndex['My List'].series;
      newFavorites = deleteItem(action.serie, prevFavorites);
      newState.seriesIndex['My List'].series = newFavorites;
      return newState;
    case LOGOUT:
      return _defaultState;
    default:
      return state;
  }
};

export default SeriesReducer;
