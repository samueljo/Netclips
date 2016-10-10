import React from 'react';

const Review = ({rating, body}) => (
  <div>
    <ul>
      <li>Rating: {rating}</li>
      <li>{body}</li>
    </ul>
  </div>
);

export default Review;
