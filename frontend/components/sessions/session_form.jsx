import React from 'react';
import { Link, withRouter } from 'react-router';

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
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user}, () => {
      this.props.router.push('/');
    });
    this.setState({ password: "" });
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

  render() {
    let formHeader;
    let linkTo;
    let usernameField;
    if (this.props.formType === '/signin') {
      formHeader = 'Sign In';
      linkTo = <Link to='signup'>Sign up now.</Link>;
      usernameField = '';
    } else {
      formHeader = 'Sign Up';
      linkTo = <Link to='signin'>Sign In</Link>;
      usernameField = <input
        className='username'
        type='text'
        value={this.state.username}
        placeholder='username'
        onChange={this.handleChange} />;
    }

    return (
      <div>
        <ul>
          {this.errors()}
        </ul>
        <h1>{formHeader}</h1>
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
          <button>{formHeader}</button>
        </form>
        {linkTo}
      </div>
    );
  }
}

export default withRouter(SessionForm);
