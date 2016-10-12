export const createFavorite = (serie, success) => {
  $.ajax({
    method: 'POST',
    url: `api/favorites`,
    data: serie,
    success
  });
};

export const destroyFavorite = (serie, success) => {
  $.ajax ({
    method: 'DELETE',
    url: `api/favorites/${serie.id}`,
    success
  });
};
