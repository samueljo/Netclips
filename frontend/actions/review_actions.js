export const CREATE_REVIEW = "CREATE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const DESTROY_REVIEW = "DESTROY_REVIEW";

export const createReview = (review, genreId) => ({
  type: CREATE_REVIEW,
  review,
  genreId
});

export const updateReview = (review, genreId) => ({
  type: UPDATE_REVIEW,
  review,
  genreId
});

export const destroyReview = (review, genreId) => ({
  type: DESTROY_REVIEW,
  review,
  genreId
});
