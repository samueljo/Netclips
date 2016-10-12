import { LOGOUT } from '../actions/session_actions';

import {
  RECEIVE_SERIES,
  RECEIVE_SERIE,
  REMOVE_SERIE } from '../actions/serie_actions';

import {
  REMOVE_FAVORITE_SERIE,
  ADD_FAVORITE_SERIE } from '../actions/favorite_actions';

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
    case RECEIVE_SERIES:
      return merge({}, state, {seriesIndex: action.series});
    case RECEIVE_SERIE:
      newState = merge({}, state, {focusedGenreId: action.genreId});
      newState.serieDisplay = action.serie;
      return newState;
    case REMOVE_SERIE:
      return merge({}, state, {serieDisplay: null, focusedGenreId: null});
    case ADD_FAVORITE_SERIE:
      newState = merge({}, state);
      const prevFavorites = state.seriesIndex['My List'].series.slice();
      const allFavorites = [action.serie, ...prevFavorites];
      newState.seriesIndex['My List'].series = allFavorites;
      return newState;
    case LOGOUT:
      return _defaultState;
    default:
      return state;
  }
};

export default SeriesReducer;
//

// case REMOVE_FAVORITE_SERIE:
//   let newState = merge({}, state);
//   delete newState[action.serie.id];
//   return newState;
// case LOGOUT:
//   return {};
// default:
//   return state;
