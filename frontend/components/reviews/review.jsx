import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Review = ({ reviews }) => {

  const reviewList = () => {
    return reviews.map((review) => {
      if (review.body) {
        return(
          <ul key={review.id} className='details-desc'>
            <li>
              <StarRatingComponent
                name='rating'
                className='rating'
                starCount={5}
                editing={false}
                value={review.rating} />
            </li>
            <li>{review.body}</li>
          </ul>
        );
      } else {
        return <div></div>;
      }
    });
  };

  return(
    <div className='reviews'>
      <h1 className='details-header'>Member Reviews</h1>
      {reviewList()}
    </div>
  );
};

export default Review;
