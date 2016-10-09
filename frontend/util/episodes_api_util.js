export const fetchEpisodes = (serieId, success) => {
  $.ajax({
    method: 'GET',
    url: `api/series/${serieId}/episodes`,
    success
  });
};
