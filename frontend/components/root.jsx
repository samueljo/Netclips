import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import GreetingContainer from './greetings/greeting_container';
import SessionFormContainer from './sessions/session_form_container';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  const _redirectToMain = (nextState, replace) => {
    replace('/');
  };

  return(
    <Provider store = {store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={GreetingContainer} />
          <Route path="/signin"
            component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn} />
          <Route path="/signup"
            component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
