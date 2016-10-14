import {
  receiveEpisodes,
  receiveEpisode,
  REQUEST_EPISODES,
  REQUEST_EPISODE } from '../actions/episode_actions';

import {
  fetchEpisodes,
  fetchEpisode } from '../util/episodes_api_util';

export default ({ getState, dispatch }) => next => action => {
  const episodesSuccess = data => dispatch(receiveEpisodes(data));

  const episodeSuccess = data => {
    action.callback();
    return dispatch(receiveEpisode(data));
  };

  switch(action.type) {
    case REQUEST_EPISODES:
      return fetchEpisodes(action.serieId, episodesSuccess);
    case REQUEST_EPISODE:
      fetchEpisode(action.id, episodeSuccess);
      break;
    default:
      break;
  }
  return next(action);
};
