export const RECEIVE_EPISODES = "RECEIVE_EPISODES";
export const REQUEST_EPISODES = "REQUEST_EPISODES";
export const GRAB_EPISODES = "GRAB_EPISODES";
export const RECEIVE_EPISODE = "RECEIVE_EPISODE";
export const REQUEST_EPISODE = "REQUEST_EPISODE";
export const CACHED_EPISODES = "CACHED_EPISODES";

export const requestEpisodes = (serieId) => ({
  type: REQUEST_EPISODES,
  serieId
});

export const grabEpisodes = (serieId) => ({
  type: GRAB_EPISODES,
  serieId
});

export const receiveEpisodes = (serieId, episodes, cache) => ({
  type: RECEIVE_EPISODES,
  serieId,
  episodes,
  cache
});

export const cachedEpisodes = (episodes) => ({
  type: CACHED_EPISODES,
  episodes
});

export const requestEpisode = (id, callback) => ({
  type: REQUEST_EPISODE,
  id,
  callback
});

export const receiveEpisode = (episode) => ({
  type: RECEIVE_EPISODE,
  episode
});
