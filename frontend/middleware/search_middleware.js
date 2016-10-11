import {
  receiveSearchResults,
  REQUEST_SEARCH_RESULTS } from '../actions/search_actions';

import {
  fetchSearchResults } from '../util/search_api_util';

export default ({ getState, dispatch }) => next => action => {
  const searchSuccess = data => {
    dispatch(receiveSearchResults(data));
    return action.cb();
  };

  switch(action.type) {
    case REQUEST_SEARCH_RESULTS:
      fetchSearchResults(action.query, searchSuccess);
      break;
    default:
      break;
  }
  return next(action);
};
