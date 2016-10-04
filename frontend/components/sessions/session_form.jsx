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
    if (this.props.formType === '/signin') {
      formHeader = 'Sign In';
      linkTo =
      usernameField = '';
      linkTo =
        <p>New to Netclips?
          <Link to='signup'> Sign up now.</Link>
        </p>;
    } else {
      formHeader = 'Sign Up';
      usernameField = <input
        className='username'
        type='text'
        value={this.state.username}
        placeholder='username'
        onChange={this.handleChange} />;
      linkTo =
        <p>Already have an account?
          <Link to='signin'> Sign In</Link>
        </p>;
    }
    return ({
      formHeader,
      linkTo,
      usernameField
    });
  }

  render() {
    const { formHeader, linkTo, usernameField } = this.toggleFormFields();

    return (
      <div className={'session-background'}>
        <ul>
          {this.errors()}
        </ul>
        <div className='session-form group'>
          <h1 className='session-header'>{formHeader}</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              className='email'
              type='text'
              value={this.state.email}
              placeholder='email'
              onChange={this.handleChange} />
            {usernameField}
            <input
              className='password'
              type='password'
              value={this.state.password}
              placeholder='password'
              onChange={this.handleChange} />
            <input
              className='session-button guest'
              onClick={this.signinGuest}
              readOnly value='Sign in with guest.' />
            <button>{formHeader}</button>
          </form>
          {linkTo}
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
