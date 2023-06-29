const TOKEN_NAME = 'access_token';

export const getToken = () => localStorage.getItem(TOKEN_NAME);

export const setToken = accessToken => {
  localStorage.setItem(TOKEN_NAME, accessToken);
};

export const deleteToken = () => localStorage.removeItem(TOKEN_NAME);
