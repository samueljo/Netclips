export const REQUEST_SEARCH_RESULTS = "REQUEST_SEARCH_RESULTS";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

export const requestSearchResults = (query, cb) => ({
  type: REQUEST_SEARCH_RESULTS,
  query,
  cb
});

export const receiveSearchResults = (results) => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS
});
