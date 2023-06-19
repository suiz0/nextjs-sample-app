import { isBrowser } from "../../utils";

const readJWT = (): string | null => {
  if (isBrowser()) {
    return window.localStorage.getItem("auth.token");
  }

  return null;
};

const login = () => {
  if (isBrowser()) {
    return window.localStorage.setItem("auth.token", "test");
  }
};

const logout = () => {
  if (isBrowser()) {
    return window.localStorage.removeItem("auth.token");
  }
};

const isUserAuthenticated = () => {
  return readJWT() !== null;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  readJWT,
  login,
  isUserAuthenticated,
  logout,
};
