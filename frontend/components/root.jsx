import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { requestSearchResults } from '../actions/search_actions';

import App from './app';
import SessionFormContainer from './sessions/session_form_container';
import WatchContainer from './watch/watch_container';
import MainContainer from './main/main_container';
import SearchResultsContainer from './search/search_results_container';

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

  const _redirectSearch = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace('/signin');
    } else {
      let { query } = nextState.location.query;
      query = decodeURI(query);
      store.dispatch(requestSearchResults({query: query}, () => {}));
    }
  };

  return(
    <Provider store = {store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={MainContainer} />
          <Route path="/search"
            component={SearchResultsContainer}
            onEnter={_redirectSearch} />
        </Route>
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
