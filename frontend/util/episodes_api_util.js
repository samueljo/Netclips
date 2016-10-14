export const fetchEpisodes = (serieId, success) => (
  $.ajax({
    method: 'GET',
    url: `api/series/${serieId}/episodes`,
    success
  })
);

export const fetchEpisode = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/episodes/${id}`,
    success
  });
};
