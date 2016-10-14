import React from 'react';
import { withRouter } from 'react-router';
import GreetingContainer from './greetings/greeting_container';
import MainContainer from './main/main_container';
import NavbarContainer from './navbar/navbar_container';

const App = ({ children, router, location }) => {
  return (
    <div>
      <NavbarContainer query={location.query.query} />
      <GreetingContainer />
      {children}
    </div>
  );
};

export default withRouter(App);
