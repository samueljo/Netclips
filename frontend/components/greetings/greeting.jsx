import React from 'react';
import { Link, withRouter } from 'react-router';
import Navbar from './nav_bar';

const Greeting = ({ currentUser, logout, router }) => {

  const _redirectToMain = () => {
    router.push('/');
  };

  if (currentUser) {
    return (
      <Navbar currentUser={currentUser} logout={logout} router={router} />
    );
  } else {
    return (
      <div className='entry-background'>
        <div className='header'>
          <img className='logo main-logo' onClick={_redirectToMain} />
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
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(Greeting);
