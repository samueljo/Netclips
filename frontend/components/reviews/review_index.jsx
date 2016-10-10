import React from 'react';
import Review from '../reviews/review';
import ReviewForm from './review_form';


class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='review-container'>
        <Review reviews={this.props.reviews} />
        <ReviewForm serieDisplay={this.props.serieDisplay} />
      </div>
    );
  }
}

export default ReviewIndex;
