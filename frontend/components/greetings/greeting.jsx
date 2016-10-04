import React from 'react';
import { Link } from 'react-router';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <h1>{currentUser.username}</h1>
        <button onClick={logout}>Sign out of NetClips</button>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          <li><Link to="signup">Join Free</Link></li>
          <li><Link to="signin">Sign In</Link></li>
        </ul>
      </div>
    );
  }
};

export default Greeting;
