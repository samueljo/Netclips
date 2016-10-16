import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'react-modal';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = { modalOpen: false };
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  reviewList(modal) {
    const classNames = ['rating', 'review', 'details-desc', 'delete-review'];
    if (modal) {
      for (let i = 0; i < classNames.length; i++) {
        classNames[i] += ' modal';
      }
    }

    const allReviews = this.props.otherUserReviews.map((review) => {
      if (review.body) {
        return(
          <div key={review.id} className={classNames[2]}>
            <StarRatingComponent
              name='rating'
              className={classNames[0]}
              starColor={'Red'}
              starCount={5}
              editing={false}
              value={review.rating} />
            <p className={classNames[1]}>{review.body}</p>
          </div>
        );
      } else {
        return <div></div>;
      }
    });

    const currentUserReview = this.props.currentUserReview[0];

    if (currentUserReview && currentUserReview.body) {
      allReviews.unshift(
        <div key={currentUserReview.id} className={classNames[2]}>
          <StarRatingComponent
            name='rating'
            className={classNames[0]}
            starColor={'Gold'}
            starCount={5}
            editing={false}
            value={currentUserReview.rating} />
          <p className={classNames[1]}>{currentUserReview.body}</p>
          <button
            className={classNames[3]}
            onClick={this.handleClick}>Delete</button>
        </div>
      );
    }

    return allReviews;
  }

  handleClick() {
    const currentUserReview = this.props.currentUserReview[0];
    const focusedGenreId = this.props.focusedGenreId;
    this.props.destroyReview(currentUserReview, focusedGenreId);
  }

  renderMoreReviewsButton() {
    const otherUserReviews = this.props.otherUserReviews;
    const currentUserReview = this.props.currentUserReview;

    const reviewsCount = otherUserReviews.length + currentUserReview.length;
    if (reviewsCount > 3) {
      const buttonText = `See all reviews (${reviewsCount})`;
      return(
        <button
          className='all-reviews'
          onClick={this.openModal}>{buttonText}</button>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const customStyle = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 0, 0.75)'
      }
    };

    return(
      <div className='reviews'>
        <h1 className='details-header'>Member Reviews</h1>
        {this.reviewList().slice(0, 3)}
        {this.renderMoreReviewsButton()}
        <Modal
          className='modal-layer'
          isOpen={this.state.modalOpen}
          style={customStyle}
          onRequestClose={this.closeModal}>
          <h1 className='modal-header'>All Reviews</h1>
          {this.reviewList('modal')}
          <button
            className='close-modal'
            onClick={this.closeModal}>{String.fromCharCode(215)}</button>
        </Modal>

      </div>
    );
  }
}

export default Review;
