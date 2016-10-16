import React from 'react';
import SearchContainer from '../search/search_container';
import { Link, withRouter } from 'react-router';

const Navbar = ({ query, currentUser, logout, router }) => {
  const _redirectToMain = () => {
    router.push('/');
  };

  const currentUsername = (currentUser) ? currentUser.username : '';
  if (currentUser) {
    return (
      <div className='nav-header group'>
        <div className='nav'>
          <h1 className='logo nav-logo' onClick={_redirectToMain} />
          <div className='nav-user'>{currentUsername}
            <ul className='nav-dropdown'>
              <li className='nav-dropdown-item'>
                <button className='sign-out'
                  onClick={logout}>Sign out of NetClips</button>
              </li>
            </ul>
          </div>
          <div className='search-bar-container'>
            <SearchContainer query={query} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default withRouter(Navbar);
