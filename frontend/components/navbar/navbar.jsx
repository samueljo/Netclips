import React from 'react';
import { Link, withRouter } from 'react-router';

const Navbar = ({ currentUser, logout, router }) => {

  const _redirectToMain = () => {
    router.push('/');
  };

  if (currentUser) {
    return (
      <div className='nav group'>
        <h1 className='nav user'>{currentUser.username}</h1>
        <img className='logo nav-logo' onClick={_redirectToMain} />
        <button className='nav signout'
          onClick={logout}>Sign out of NetClips</button>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default withRouter(Navbar);
