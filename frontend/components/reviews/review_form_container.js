import ReviewForm from './review_form';
import { connect } from 'react-redux';
import { createReview } from '../../actions/serie_actions';

const mapStateToProps = (state) => ({
  serieDisplay: state.series.serieDisplay
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
