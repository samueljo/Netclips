export const createCurrentWatching = (currentWatching, success) => {
  $.ajax({
    method: 'POST',
    url: `api/current_watchings`,
    data: currentWatching,
    success
  });
};

export const updateCurrentWatching = (currentWatching, success) => {
  $.ajax ({
    method: 'PATCH',
    url: `api/current_watchings/${currentWatching.serie_id.id}`,
    data: {currentWatching},
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
