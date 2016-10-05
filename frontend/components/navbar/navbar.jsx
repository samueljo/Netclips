import React from 'react';
import { Link, withRouter } from 'react-router';

const Navbar = ({ currentUser, logout, router }) => {

  const _redirectToMain = () => {
    router.push('/');
  };

  if (currentUser) {
    return (
      <div className='browse-header main-page'>
        <h1>{currentUser.username}</h1>
        <img className='logo main-logo' onClick={_redirectToMain} />
        <button onClick={logout}>Sign out of NetClips</button>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default withRouter(Navbar);
