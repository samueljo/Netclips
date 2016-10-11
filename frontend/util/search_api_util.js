export const fetchSearchResults = (query, success) => {
  $.ajax({
    method: 'GET',
    url: '/api/search',
    data: query,
    success
  });
};


// export const fetchSearchResults = (query, success, error) => {
//   $.ajax({
//     method: "GET",
//     url: "/api/search",
//     data: {search: query},
//     success,
//     error
//   });
// };
