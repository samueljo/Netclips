export const signup = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: user,
    success,
    error
  });
};

export const signin = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: user,
    success,
    error
  });
};

export const logout = (complete) => {
  $.ajax({
    method: 'DELETE',
    url: 'api/session',
    complete
  });
};
