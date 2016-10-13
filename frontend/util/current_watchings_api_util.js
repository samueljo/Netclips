export const createOrUpdateCurrentWatching = (currentWatching, success) => {
  $.ajax({
    method: 'POST',
    url: `api/current_watchings`,
    data: currentWatching,
    success
  });
};

export const destroyCurrentWatching = (serieId, success) => {
  $.ajax ({
    method: 'DELETE',
    url: `api/current_watchings/${serieId}`,
    success
  });
};
