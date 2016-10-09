import {
  receiveEpisodes,
  REQUEST_EPISODES } from '../actions/episode_actions';

import {
  fetchEpisodes } from '../util/episodes_api_util';

// import { UPDATE_FILTER } from '../actions/filter_actions';

export default ({ getState, dispatch }) => next => action => {
  const episodesSuccess = data => dispatch(receiveEpisodes(data));
  switch(action.type) {
    case REQUEST_EPISODES:
      fetchEpisodes(action.serieId, episodesSuccess);
      break;
    default:
      break;
  }
  return next(action);
};
