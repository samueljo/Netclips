import {
  RECEIVE_EPISODES,
  RECEIVE_EPISODE } from '../actions/episode_actions';

// REMOVE_SERIE

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
    // case RECEIVE_EPISODE:
    //   newState = merge({}, state);
    //   newState.playingEpisode = action.episode;
    //   return newState;
    default:
      return state;
  }
};

export default EpisodesReducer;
