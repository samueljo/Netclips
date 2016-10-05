import React from 'react';
import { withRouter } from 'react-router';
import GreetingContainer from './greetings/greeting_container';
import MainContainer from './series/main_container';

const App = ({ children, router }) => {
  return (
    <div>
      <MainContainer />
      <GreetingContainer />
      {children}
    </div>
  );
};

export default withRouter(App);
