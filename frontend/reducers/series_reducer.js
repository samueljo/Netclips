import {
  RECEIVE_SERIES,
  RECEIVE_SERIE } from '../actions/serie_actions';

import merge from 'lodash/merge';

const _defaultState = {
  seriesIndex: {},
};

const SeriesReducer = (state = _defaultState, action) => {
  switch(action.type) {
    case RECEIVE_SERIES:
      return merge({}, state, {seriesIndex: action.series});
    case RECEIVE_SERIE:
      return merge({}, state, {details: action.serie});
    default:
      return state;
  }
};

export default SeriesReducer;
