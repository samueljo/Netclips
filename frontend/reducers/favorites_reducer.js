import { LOGOUT } from '../actions/session_actions';
import {
  REMOVE_FAVORITE_SERIE,
  ADD_FAVORITE_SERIE } from '../actions/favorite_actions';

import merge from 'lodash/merge';

const FavoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_FAVORITE_SERIE:
      const newFavoriteSerie = { [action.serie.id]: action.serie };
      return merge({}, state, newFavoriteSerie);
    case REMOVE_FAVORITE_SERIE:
      let newState = merge({}, state);
      delete newState[action.serie.id];
      return newState;
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default FavoritesReducer;
