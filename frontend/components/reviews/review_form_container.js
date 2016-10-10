import ReviewForm from './review_form';
import { connect } from 'react-redux';
import { createReview } from '../../actions/serie_actions';

const mapDispatchToProps = dispatch => ({
  createReview: (review) => dispatch(createReview(review))
});

export default connect(
  null,
  mapDispatchToProps
)(ReviewForm);
