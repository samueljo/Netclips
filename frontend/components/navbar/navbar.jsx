import React from 'react';
import { Link, withRouter } from 'react-router';

const Navbar = ({ currentUser, logout, router }) => {

  const _redirectToMain = () => {
    router.push('/');
  };

  const currentUsername = (currentUser) ? currentUser.username : '';

  return (
    <div className='nav-header group'>
      <div className='nav'>
        <h1 className='logo nav-logo' onClick={_redirectToMain} />
        <div className='nav-user'>{currentUsername}
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
