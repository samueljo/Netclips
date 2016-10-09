import {
  receiveEpisodes,
  receiveEpisode,
  REQUEST_EPISODES,
  REQUEST_EPISODE } from '../actions/episode_actions';

import {
  fetchEpisodes,
  fetchEpisode } from '../util/episodes_api_util';

// import { UPDATE_FILTER } from '../actions/filter_actions';

export default ({ getState, dispatch }) => next => action => {
  const episodesSuccess = data => dispatch(receiveEpisodes(data));

  const episodeSuccess = data => {
    action.callback();
    return dispatch(receiveEpisode(data));
  };

  switch(action.type) {
    case REQUEST_EPISODES:
      fetchEpisodes(action.serieId, episodesSuccess);
      break;
    case REQUEST_EPISODE:
      fetchEpisode(action.id, episodeSuccess);
      break;
    default:
      break;
  }
  return next(action);
};
