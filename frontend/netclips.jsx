import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';

import {
  createCurrentWatching,
  updateCurrentWatching,
  destroyCurrentWatching } from './actions/current_watching_actions';

window.createCurrentWatching = createCurrentWatching;
window.updateCurrentWatching = updateCurrentWatching;
window.destroyCurrentWatching = destroyCurrentWatching;

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
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store} />, root);
});
