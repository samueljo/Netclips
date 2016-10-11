import { LOGOUT } from '../actions/session_actions';
import {
  RECEIVE_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS } from '../actions/search_actions';

import merge from 'lodash/merge';

const _defaultState = {
  series: []
};

const SearchReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return { series: action.results.series };
    case CLEAR_SEARCH_RESULTS:
      return _defaultState;
    case LOGOUT:
      return _defaultState;
    default:
      return state;
  }
};

export default SearchReducer;
