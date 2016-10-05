import {
  RECEIVE_SERIES,
  RECEIVE_SERIE } from '../actions/serie_actions';

import merge from 'lodash/merge';

const SeriesReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_SERIES:
      return action.series;
    case RECEIVE_SERIE:
      return merge({}, state, {[action.serie.id]: action.serie});
    default:
      return state;
  }
};

export default SeriesReducer;
