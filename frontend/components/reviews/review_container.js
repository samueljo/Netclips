import ReviewIndex from './review_index';
import { connect } from 'react-redux';
import {
  createReview,
  updateReview,
  destroyReview } from '../../actions/review_actions';

const mapStateToProps = ({ series }) => ({
  focusedGenreId: series.focusedGenreId,
  serieDisplay: series.serieDisplay,
  currentUserReview: series.serieDisplay.current_user_review,
  otherUserReviews: series.serieDisplay.other_user_reviews
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review, genreId) => dispatch(createReview(review, genreId)),
  updateReview: (review, genreId) => dispatch(updateReview(review, genreId)),
  destroyReview: (review, genreId) => dispatch(destroyReview(review, genreId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
