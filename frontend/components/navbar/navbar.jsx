import React from 'react';
import { Link, withRouter } from 'react-router';

const Navbar = ({ currentUser, logout, router }) => {

  const _redirectToMain = () => {
    router.push('/');
  };

  return (
    <div className='nav group'>
      <h1 className='nav user'>{currentUser.username}</h1>
      <img className='logo nav-logo' onClick={_redirectToMain} />
      <button className='nav signout'
        onClick={logout}>Sign out of NetClips</button>
    </div>
  );
};

export default withRouter(Navbar);
