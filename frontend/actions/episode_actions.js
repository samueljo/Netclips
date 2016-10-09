export const RECEIVE_EPISODES = "RECEIVE_EPISODES";
export const REQUEST_EPISODES = "REQUEST_EPISODES";
export const RECEIVE_EPISODE = "RECEIVE_EPISODE";
export const REQUEST_EPISODE = "REQUEST_EPISODE";
// export const REMOVE_EPISODE = "REMOVE_EPISODE";

export const requestEpisodes = (serieId) => ({
  type: REQUEST_EPISODES,
  serieId
});

export const receiveEpisodes = (episodes) => ({
  type: RECEIVE_EPISODES,
  episodes
});

export const requestEpisode = (id) => ({
  type: REQUEST_EPISODE,
  id
});

export const receiveEpisode = (episode) => ({
  type: RECEIVE_EPISODE,
  episode
});
//
// export const removeEpisode = () => ({
//   type: REMOVE_EPISODE
// });
