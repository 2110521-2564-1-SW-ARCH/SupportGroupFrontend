const AUTH_TOKEN = 'token';
const CURRENT_USER = 'current_user';
const APPLE_ENV = 'apple_env';
const LOCATION = 'location';

export const getAuthToken = () => {
  console.log(localStorage.getItem(AUTH_TOKEN))
  return localStorage.getItem(AUTH_TOKEN);
};

export const getAuthTokenAsync = async () => {
  const token = await localStorage.getItem(AUTH_TOKEN);
  return token;
};

export const setAuthToken = (value) => {
  localStorage.setItem(AUTH_TOKEN, value);
};

export const getCurrentUser = () => {
  return localStorage.getItem(CURRENT_USER);
};

export const setCurrentUser = (value) => {
  localStorage.setItem(CURRENT_USER, value);
};

export const getAppleEnv = () => {
  return localStorage.getItem(APPLE_ENV);
};

export const setAppleEnv = (value) => {
  localStorage.setItem(APPLE_ENV, value);
};

export const getCacheLocation = () => {
  try {
    const itemStr = localStorage.getItem(LOCATION);
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiration) {
      localStorage.removeItem(LOCATION);
      return null;
    }
    return item.value.toString();
  } catch (error) {
    return null;
  }
};

export const setCacheLocation = (value) => {
  const now = new Date();
  const item = {
    value: value,
    expiration: now.getTime() + 10 * 60000,
  };
  localStorage.setItem(LOCATION, JSON.stringify(item));
};

export const clearStorage = () => {
  localStorage.clear();
};
