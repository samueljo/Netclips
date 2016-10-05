import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './sessions/session_form_container';
import MainContainer from './main/main_container';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  const _redirectUnlessLoggedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace('/signin');
    }
  };

  return(
    <Provider store = {store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} />
        <IndexRoute component={MainContainer} />
        <Route path="/signin"
          component={SessionFormContainer}
          onEnter={_redirectIfLoggedIn} />
        <Route path="/signup"
          component={SessionFormContainer}
          onEnter={_redirectIfLoggedIn} />
      </Router>
    </Provider>
  );
};

export default Root;
