import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Review = ({rating, body}) => (
  <div>
    <ul>
      <li>
        <StarRatingComponent
          name='rating'
          className='rating'
          starCount={5}
          editing={false}
          value={rating} />
      </li>
      <li>{body}</li>
    </ul>
  </div>
);

export default Review;
