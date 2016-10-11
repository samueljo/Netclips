import React from 'react';
import { Link, withRouter } from 'react-router';
import { signin } from '../../util/session_api_util';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signinGuest = this.signinGuest.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user}, () => {
      this.props.router.push('/');
    });
    this.setState({ password: "" });
  }

  signinGuest() {
    this.setState({ email: 'guest@guest.com', password: 'password' });
    this.props.processForm(
      { user: { email: 'guest@guest.com', password: 'password' } }, () => {
        this.props.router.push('/');
      }
    );
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.props.clearErrors();
    });
  }

  handleChange(e) {
    this.setState({ [e.currentTarget.className]: e.currentTarget.value });
  }

  toggleFormFields() {
    let formHeader, linkTo, usernameField, signinGuest ;
    if (this.props.formType === '/signin') {
      formHeader = 'Sign In';
      usernameField = '';
      linkTo =
        <p>New to Netclips? <Link to='signup'
          className='session-link sign'>Sign up now.</Link>
        </p>;
      signinGuest =
        <button className='session-link guest'
          onClick={this.signinGuest}>Sign in with guest.</button>;
    } else {
      formHeader = 'Sign Up';
      usernameField =
        <label htmlFor='form-username' className='form-label'>Username<input
          id='form-username'
          className='username'
          type='text'
          value={this.state.username}
          onChange={this.handleChange} /></label>;
      linkTo =
        <p>Already have an account? <Link to='signin'
          className='session-link sign'>Sign In</Link>
        </p>;
    }
    return ({ formHeader, linkTo, usernameField, signinGuest });
  }

  errors() {
    const signup = <Link to='signup'
    className='session-link error'>create a new account.</Link>;
    if (typeof this.props.errors[0] !== 'undefined') {
      if (this.props.formType === '/signin') {
        return (
          <div className='error'>Sorry, we can't find an account with this
            email address. Please try again or {signup}</div>);
      } else {
        return (
          <div className='error'>Please provide valid credentials.</div>
        );
      }
    }
  }

  render() {
    const {
      formHeader,
      linkTo,
      usernameField,
      signinGuest } = this.toggleFormFields();

    const _redirectToMain = () => {
      this.props.router.push('/');
    };

    return (
      <div className={'session-background'}>
        <div className='header group'>
          <h1 className='logo entry-logo' onClick={_redirectToMain} />
        </div>
        <div className='session-form group'>
          <h1 className='session-header'>{formHeader}</h1>
          {this.errors()}
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='form-email' className='form-label'>Email<input
              id='form-email'
              className='email'
              type='text'
              value={this.state.email}
              onChange={this.handleChange} /></label>
            {usernameField}
            <label htmlFor='form-password' className='form-label'>Password<input
              id='form-password'
              className='password'
              type='password'
              value={this.state.password}
              onChange={this.handleChange} /></label>
            <button className='session-button'>{formHeader}</button>
          </form>
          {signinGuest}
          {linkTo}
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
