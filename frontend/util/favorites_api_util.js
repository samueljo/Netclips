export const createFavorite = (serie, genre, success) => {
  $.ajax({
    method: 'POST',
    url: `api/favorites`,
    data: { favorite: { serie_id: serie.id } },
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
