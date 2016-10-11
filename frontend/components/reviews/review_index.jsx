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
        <Review
          otherUserReviews={this.props.otherUserReviews}
          currentUserReview={this.props.currentUserReview}
          destroyReview={this.props.destroyReview}
          focusedGenreId={this.props.focusedGenreId} />
        <ReviewForm
          focusedGenreId={this.props.focusedGenreId}
          serieDisplay={this.props.serieDisplay}
          currentUserReview={this.props.currentUserReview}
          createReview={this.props.createReview}
          updateReview={this.props.updateReview} />
      </div>
    );
  }
}

export default ReviewIndex;
