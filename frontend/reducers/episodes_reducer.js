import { LOGOUT } from '../actions/session_actions';

import {
  RECEIVE_EPISODES,
  RECEIVE_EPISODE } from '../actions/episode_actions';

import merge from 'lodash/merge';

const _defaultState = { displayEpisodes: [] };

const EpisodesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_EPISODES:
      newState = merge({}, state);
      newState.displayEpisodes = action.episodes;
      return newState;
    case LOGOUT:
      return _defaultState;
    default:
      return state;
  }
};

export default EpisodesReducer;
