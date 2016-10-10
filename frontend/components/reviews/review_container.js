import ReviewIndex from './review_index';
import { connect } from 'react-redux';
import { createReview } from '../../actions/serie_actions';

const mapStateToProps = (state) => ({
  serieDisplay: state.series.serieDisplay,
  reviews: state.series.serieDisplay.reviews,

});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review))
});

// update and delete review

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
