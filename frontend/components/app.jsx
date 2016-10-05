import React from 'react';
import { withRouter } from 'react-router';

const App = ({ children, router }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default withRouter(App);
