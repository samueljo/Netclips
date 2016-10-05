import React from 'react';
import { withRouter } from 'react-router';
import GreetingContainer from './greetings/greeting_container';
import NavbarContainer from './navbar/navbar_container';

const App = ({ children, router }) => {
  return (
    <div>
      <NavbarContainer />
      <GreetingContainer />
      {children}
    </div>
  );
};

export default withRouter(App);
