import { LOGOUT } from '../actions/session_actions';
import {
  RECEIVE_FAVORITE_SERIES,
  REMOVE_FAVORITE_SERIE,
  ADD_FAVORITE_SERIE } from '../actions/favorite_actions';

import merge from 'lodash/merge';

const FavoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FAVORITE_SERIES:
      let newState = {};
      action.series.forEach((serie) => {
        newState[serie.idx] = serie;
      });
      return newState;
    case ADD_FAVORITE_SERIE:
      const newFavoriteSerie = { [action.serie.id]: action.serie };
      return merge({}, state, newFavoriteSerie);
    case REMOVE_FAVORITE_SERIE:
      newState = merge({}, state);
      delete newState[action.serie.id];
      return newState;
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default FavoritesReducer;
