import React from 'react';
import { withRouter } from 'react-router';

const App = ({ children, router }) => {
  const _redirectToMain = () => {
    router.push('/');
  };

  return (
    <div>
      <img className='logo main-logo' onClick={_redirectToMain} />
      {children}
    </div>
  );
};

export default withRouter(App);
