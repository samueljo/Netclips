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

export const createReview = (review, success) => {
  $.ajax({
    method: 'POST',
    url: `api/reviews`,
    data: review,
    success
  });
};

export const updateReview = (review, success) => {
  $.ajax ({
    method: 'PATCH',
    url: `api/reviews/${review.review.id}`,
    data: review,
    success
  });
};

export const destroyReview = (review, success) => {
  $.ajax ({
    method: 'DELETE',
    url: `api/reviews/${review.id}`,
    success
  });
};
