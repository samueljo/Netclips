import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT } from '../actions/session_actions';

import merge from 'lodash/merge';

const _defaultSession = {
  currentUser: null
};

const SessionReducer = (state = _defaultSession, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {
        currentUser: action.currentUser
      });
    case LOGOUT:
      return _defaultSession;
    default:
      return state;
  }
};

export default SessionReducer;
