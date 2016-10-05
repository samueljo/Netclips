import React from 'react';
import { withRouter } from 'react-router';
import GreetingContainer from './greetings/greeting_container';

const App = ({ children, router }) => {
  return (
    <div>
      <GreetingContainer />
      {children}
    </div>
  );
};

export default withRouter(App);
