import React from 'react';
import { Link, withRouter } from 'react-router';

const Greeting = ({ currentUser, router, processForm }) => {

  const _redirectToMain = () => {
    router.push('/');
  };

  const signinGuest = () => {
    processForm(
      { user: { email: 'guest@guest.com', password: 'password' } }, () => {
        router.push('/');
      }
    );
  };

  if (!currentUser) {
    return (
      <div className='entry-background'>
        <div className='header'>
          <h1 className='logo entry-logo' onClick={_redirectToMain} />
          <div className='group'>
            <Link to="signin" className='jumbo-button sign-in'>Sign In</Link>
          </div>
        </div>

        <div className='join-motto'>
          <p className='motto motto-header'>See what's next.</p>
          <p className='motto motto-body'>Watch anywhere. Cancel anytime.</p>
          <div className='group'>
            <Link to="signup"
              className='jumbo-button sign-up'>Join Free</Link>
            <button className='jumbo-button sign-up'
              onClick={signinGuest}>Sign in with guest.</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default withRouter(Greeting);
