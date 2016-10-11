import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'react-modal';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // renderAllReviews = () => {
  //   // Return a modal with all reviews
  //   // On click for all-reviews button
  // };

  reviewList() {
    const allReviews = this.props.otherUserReviews.map((review) => {
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

    const currentUserReview = this.props.currentUserReview[0];

    if (currentUserReview && currentUserReview.body) {
      allReviews.unshift(
        <div key={currentUserReview.id} className='details-desc'>
          <StarRatingComponent
            name='rating'
            className='rating'
            starCount={5}
            editing={false}
            value={currentUserReview.rating} />
          <p className='review'>{currentUserReview.body}</p>
          <button
            className='delete-review'
            onClick={this.handleClick}>Delete</button>
        </div>
      );
    }

    return allReviews.slice(0, 3);
  }

  renderMoreReviewsButton() {
    const otherUserReviews = this.props.otherUserReviews;
    const currentUserReview = this.props.currentUserReview;

    const reviewsCount = otherUserReviews.length + currentUserReview.length;
    if (reviewsCount > 3) {
      const buttonText = `See all reviews (${reviewsCount})`;
      return(
        <button className='all-reviews'>{buttonText}</button>
      );
    } else {
      return <div></div>;
    }
  }

  handleClick() {
    const currentUserReview = this.props.currentUserReview[0];
    const focusedGenreId = this.props.focusedGenreId;
    this.props.destroyReview(currentUserReview, focusedGenreId);
  }

  render() {
    return(
      <div className='reviews'>
        <h1 className='details-header'>Member Reviews</h1>
        {this.reviewList()}
        {this.renderMoreReviewsButton()}
      </div>
    );
  }
}

export default Review;
