import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import {
  requestSeries,
  requestSerie } from './actions/serie_actions';

import {
  fetchSeries,
  fetchSerie } from './util/series_api_util';

window.requestSeries = requestSeries;
window.requestSerie = requestSerie;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  window.store = store;
  if (window.currentUser) {
    const initialState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(initialState);
    window.store = store;
  } else {
    store = configureStore();
    window.store = store;
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
