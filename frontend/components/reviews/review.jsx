import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Review = ({
  focusedGenreId,
  currentUserReview,
  otherUserReviews,
  destroyReview }) => {

  const reviewList = () => {
    const allReviews = otherUserReviews.map((review) => {
      if (review.body) {
        return(
          <div key={review.id} className='details-desc'>
            <StarRatingComponent
              name='rating'
              className='rating'
              starCount={5}
              editing={false}
              value={review.rating} />
            <p className='review'>{review.body}</p>
          </div>
        );
      } else {
        return <div></div>;
      }
    });

    if (currentUserReview[0] && currentUserReview[0].body) {
      allReviews.unshift(
        <div key={currentUserReview[0].id} className='details-desc'>
          <StarRatingComponent
            name='rating'
            className='rating'
            starCount={5}
            editing={false}
            value={currentUserReview[0].rating} />
          <p className='review'>{currentUserReview[0].body}</p>
          <button
            className='delete-review'
            onClick={handleClick}>Delete</button>
        </div>
      );
    }

    return allReviews.slice(0, 3);
  };

  // renderAllReviews = () => {
  //   // Return a modal with all reviews
  //   // On click for all-reviews button
  // };

  const renderMoreReviewsButton = () => {
    const reviewsCount = otherUserReviews.length + currentUserReview.length;
    if (reviewsCount > 3) {
      const buttonText = `See all reviews (${reviewsCount})`;
      return(
        <button className='all-reviews'>{buttonText}</button>
      );
    } else {
      return <div></div>;
    }
  };

  const handleClick = () => {
    destroyReview(currentUserReview[0], focusedGenreId);
  };

  return(
    <div className='reviews'>
      <h1 className='details-header'>Member Reviews</h1>
      {reviewList()}
      {renderMoreReviewsButton()}
    </div>
  );
};

export default Review;
