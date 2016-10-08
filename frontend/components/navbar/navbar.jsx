import React from 'react';
import { Link, withRouter } from 'react-router';

const Navbar = ({ currentUser, logout, router }) => {

  const _redirectToMain = () => {
    router.push('/');
  };

  return (
    <div className='nav-header group'>
      <div className='nav'>
        <img className='logo nav-logo' onClick={_redirectToMain} />
        <div className='nav-user'>{currentUser.username}
          <ul className='nav-dropdown'>
            <li className='nav-dropdown-item'>
              <h1>My Account</h1>
            </li>
            <li>
              <button className='nav-dropdown-item'
              onClick={logout}>Sign out of NetClips</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
