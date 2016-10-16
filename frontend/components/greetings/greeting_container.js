import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user, callback) => dispatch(signin(user, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
