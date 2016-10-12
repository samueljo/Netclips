import { LOGOUT } from '../actions/session_actions';
import {
  RECEIVE_FAVORITE_SERIES,
  REMOVE_FAVORITE_SERIE,
  ADD_FAVORITE_SERIE } from '../actions/search_actions';

import merge from 'lodash/merge';

const _defaultState = {
  favorite_series: []
};

const SearchReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FAVORITE_SERIES:
      return { series: action.favorite_series };
    case ADD_FAVORITE_SERIE:

    case REMOVE_FAVORITE_SERIE:

    case LOGOUT:
      return _defaultState;
    default:
      return state;
  }
};

export default SearchReducer;
