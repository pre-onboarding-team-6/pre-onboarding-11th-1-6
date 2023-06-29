export const getToken = () => localStorage.getItem('access_token');

export const setToken = accessToken => {
  localStorage.setItem('access_token', accessToken);
};

export const deleteToken = () => localStorage.removeItem('access_token');
