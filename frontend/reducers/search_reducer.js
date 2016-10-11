import { LOGOUT } from '../actions/session_actions';
import {
  RECEIVE_SERIES,
  RECEIVE_SERIE,
  REMOVE_SERIE } from '../actions/serie_actions';

import merge from 'lodash/merge';

const _defaultState = {
  seriesIndex: {},
  serieDisplay: null,
  focusedRowId: null
};

const SearchReducer = (state = {} , action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SERIES:
      return merge({}, state, {seriesIndex: action.series});
    case RECEIVE_SERIE:
      const newState = merge({}, state, {focusedRowId: action.rowId});
      newState.serieDisplay = action.serie;
      return newState;
    case REMOVE_SERIE:
      return merge({}, state, {serieDisplay: null, focusedRowId: null});
    case LOGOUT:
      return _defaultState;
    default:
      return state;
  }
};

export default SearchReducer;
