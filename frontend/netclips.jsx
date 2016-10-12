import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';

import {
  requestSeries,
  requestSerie } from './actions/serie_actions';
import {
  createReview } from './actions/review_actions';

import {
  fetchSeries,
  fetchSerie } from './util/series_api_util';

import {
  requestEpisodes,
  requestEpisode } from './actions/episode_actions';

import { requestSearchResults } from './actions/search_actions';

window.requestSeries = requestSeries;
window.requestEpisodes = requestEpisodes;
window.requestEpisode = requestEpisode;
window.requestSerie = requestSerie;
window.createReview = createReview;
window.requestSearchResults = requestSearchResults;

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
