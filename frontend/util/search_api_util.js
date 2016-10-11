export const fetchSearchResults = (query, success) => {
  $.ajax({
    method: 'GET',
    url: '/api/search',
    data: query,
    success
  });
};
