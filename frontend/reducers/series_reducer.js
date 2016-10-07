import {
  RECEIVE_SERIES,
  RECEIVE_SERIE,
  REMOVE_SERIE } from '../actions/serie_actions';

import merge from 'lodash/merge';

const _defaultState = {
  seriesIndex: {},
  serieDisplay: null
};

const SeriesReducer = (state = _defaultState, action) => {
  switch(action.type) {
    case RECEIVE_SERIES:
      return merge({}, state, {seriesIndex: action.series});
    case RECEIVE_SERIE:
      return merge({}, state, {serieDisplay: action.serie});
    case REMOVE_SERIE:
      return merge({}, state, {serieDisplay: null});
    default:
      return state;
  }
};

export default SeriesReducer;
