import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './sessions/session_form_container';
import WatchContainer from './watch/watch_container';
// import SearchResultsContainer from './search/search_results_container';

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
        <Route path="/signin"
          component={SessionFormContainer}
          onEnter={_redirectIfLoggedIn} />
        <Route path="/signup"
          component={SessionFormContainer}
          onEnter={_redirectIfLoggedIn} />
        <Route path="/watch"
          component={WatchContainer}
          onEnter={_redirectUnlessLoggedIn} />
      </Router>
    </Provider>
  );
};

export default Root;

// <Route path="/search" component={SearchContainer} />
