import {
  cachedEpisodes,
  receiveEpisodes,
  receiveEpisode,
  grabEpisodes,
  REQUEST_EPISODES,
  REQUEST_EPISODE,
  GRAB_EPISODES } from '../actions/episode_actions';

import {
  fetchEpisodes,
  fetchEpisode } from '../util/episodes_api_util';

import LRUCache from '../lib/lru_cache';

const episodesCache = new LRUCache(8);
// Cache will hold episodes for 8 unique series

export default ({ getState, dispatch }) => next => action => {
  const episodesSuccess = data => {
    return dispatch(receiveEpisodes(action.serieId, data, episodesCache));
  };

  const episodeSuccess = data => {
    action.callback();
    return dispatch(receiveEpisode(data));
  };

  switch(action.type) {
    case REQUEST_EPISODES:
      if (episodesCache.includes(action.serieId)) {
        return dispatch(cachedEpisodes(episodesCache.get(action.serieId)));
      } else {
        return dispatch(grabEpisodes(action.serieId));
      }
    case GRAB_EPISODES:
      return fetchEpisodes(action.serieId, episodesSuccess);
    case REQUEST_EPISODE:
      fetchEpisode(action.id, episodeSuccess);
      break;
    default:
      break;
  }
  return next(action);
};
