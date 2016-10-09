import {
  RECEIVE_EPISODES } from '../actions/episode_actions';

// RECEIVE_EPISODE,
// REMOVE_SERIE

import merge from 'lodash/merge';

const EpisodesReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EPISODES:
      return action.episodes;
    default:
      return state;
  }
};

export default EpisodesReducer;
