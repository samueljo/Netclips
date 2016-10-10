import ReviewIndex from './review_index';
import { connect } from 'react-redux';
import {
  createReview,
  updateReview,
  deleteReview } from '../../actions/serie_actions';

const mapStateToProps = ({ series }) => ({
  focusedGenreId: series.focusedGenreId,
  serieDisplay: series.serieDisplay,
  currentUserReview: series.serieDisplay.current_user_review,
  otherUserReviews: series.serieDisplay.other_user_reviews
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review, genreId) => dispatch(createReview(review, genreId)),
  updateReview: (review, genreId) => dispatch(updateReview(review, genreId)),
  deleteReview: (review, genreId) => dispatch(deleteReview(review, genreId))
});

// update and delete review

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
