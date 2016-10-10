import ReviewIndex from './review_index';
import { connect } from 'react-redux';
import { createReview } from '../../actions/serie_actions';

const mapStateToProps = ({ series }) => ({
  serieDisplay: series.serieDisplay,
  currentUserReview: series.serieDisplay.current_user_review,
  otherUserReviews: series.serieDisplay.other_user_reviews
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review))
});

// update and delete review

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
