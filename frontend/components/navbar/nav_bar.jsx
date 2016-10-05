import React from 'react';
import { Link, withRouter } from 'react-router';

const Navbar = ({ currentUser, logout, router }) => {

  const _redirectToMain = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>{currentUser.username}</h1>
      <button onClick={logout}>Sign out of NetClips</button>
    </div>
  );
};

export default withRouter(Navbar);


      // <div className='entry-background'>
      //   <div className='header'>
      //     <img className='logo main-logo' onClick={_redirectToMain} />
      //   </div>
      // </div>
