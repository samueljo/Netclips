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
    this.props.processForm(
      { user: { email: 'guest@guest.com', password: 'password' } }, () => {
        this.props.router.push('/');
      }
    );
  }

  handleChange(e) {
    this.setState({ [e.currentTarget.className]: e.currentTarget.value });
  }

  errors() {
    if (typeof this.props.errors[0] !== 'undefined') {
      return (
        this.props.errors.map((error, idx) => {
            return (<li className='error' key={idx}>{error}</li>);
        })
      );
    }
  }

  toggleFormFields() {
    let formHeader;
    let linkTo;
    let usernameField;
    let signinGuest ;
    if (this.props.formType === '/signin') {
      formHeader = 'Sign In';
      linkTo =
      usernameField = '';
      linkTo =
        <p>New to Netclips?
          <Link to='signup' className='session-link sign'> Sign up now.</Link>
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
        <p>Already have an account?
          <Link to='signin' className='session-link sign'> Sign In</Link>
        </p>;
    }
    return ({
      formHeader,
      linkTo,
      usernameField,
      signinGuest
    });
  }

  render() {
    const {
      formHeader,
      linkTo,
      usernameField,
      signinGuest } = this.toggleFormFields();

    return (
      <div className={'session-background'}>
        <ul>
          {this.errors()}
        </ul>
        <div className='session-form group'>
          <h1 className='session-header'>{formHeader}</h1>
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
            {signinGuest}
            <button className='session-button'>{formHeader}</button>
          </form>
          {linkTo}
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
