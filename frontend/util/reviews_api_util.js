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
    url: `api/reviews/${review.id}`,
    data: {review},
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
