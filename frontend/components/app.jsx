import React from 'react';
import { withRouter } from 'react-router';
import GreetingContainer from './greetings/greeting_container';
import NavbarContainer from './navbar/navbar_container';
import Footer from './footer';

const App = ({ children, router, location }) => {
  return (
    <div>
      <NavbarContainer query={location.query.query} />
      <GreetingContainer />
      {children}
      <Footer />
    </div>
  );
};

export default withRouter(App);
