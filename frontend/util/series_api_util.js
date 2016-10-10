export const fetchSeries = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/series',
    success
  });
};

export const fetchSerie = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/series/${id}`,
    success
  });
};

export const fetchReview = (review, success) => {
  $.ajax({
    method: 'POST',
    url: `api/reviews`,
    data: review,
    success
  });
};
