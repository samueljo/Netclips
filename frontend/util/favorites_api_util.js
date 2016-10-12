export const createFavorite = (serie, success) => {
  $.ajax({
    method: 'POST',
    url: `api/favorites`,
    data: serie,
    success
  });
};

export const destroyFavorite = (favorite, success) => {
  $.ajax ({
    method: 'DELETE',
    url: `api/favorites/${favorite.id}`,
    success
  });
};
