import {
  RECEIVE_SERIES,
  RECEIVE_SERIE,
  REMOVE_SERIE } from '../actions/serie_actions';

import merge from 'lodash/merge';

const _defaultState = {
  seriesIndex: {},
  serieDisplay: null,
  focusedGenreId: null
};

const SeriesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SERIES:
      return merge({}, state, {seriesIndex: action.series});
    case RECEIVE_SERIE:
      const newState = merge({}, state, {focusedGenreId: action.genreId});
      newState.serieDisplay = action.serie;
      return newState;
    case REMOVE_SERIE:
      return merge({}, state, {serieDisplay: null, focusedGenreId: null});
    default:
      return state;
  }
};

export default SeriesReducer;
