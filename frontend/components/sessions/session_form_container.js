import { connect } from 'react-redux';
import { signin, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  loggedIn: !!state.session.currentUser,
  errors: state.errors
});


const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm;

  if (ownProps.location.pathname === '/signin') {
    processForm = (user, callback) => dispatch(signin(user, callback));
  } else {
    processForm = (user, callback) => dispatch(signup(user, callback));
  }

  return ({
    formType: ownProps.location.pathname,
    processForm: processForm,
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
